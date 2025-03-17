const outerFunction = (() => {
    let counter = 0;
    return () => {
        counter--;
        return counter
    }
})()

console.log(outerFunction());
console.log(outerFunction());
console.log(outerFunction());
console.log(outerFunction());