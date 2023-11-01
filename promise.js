const p1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("resolved");
    } else {
        reject("rejected");
    }
})
    .then(value => `${value} hello`)
    .then(value => console.log("this is the value: " + value))
    .catch(console.log);

const p2 = new Promise(resolve => resolve({name: "Ruslan"}))
    .then(res => console.log(res?.name))


Promise.all([p1, p2]);

const getAwaited = async () => await Promise.race([p1]);

console.log(getAwaited());

let promise = Promise.allSettled([p1, p2]);

console.log("p2",  promise);