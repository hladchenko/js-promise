const p1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("resolved");
    } else {
        reject("rejected");
    }
});


p1
    .then(value => `${value} hello`)
    .then(value => console.log("this is the value: " + value))
    .catch(console.log);