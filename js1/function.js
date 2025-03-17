function sayHello() {
    console.log("Say hello");
}

function sum(num1 , num2) {
    var total = num1 + num2;
    console.log("output is : ", total);

}

sum(100, 54)      //while calling function we are sending arguments to parameters

function mul(num) {
    return num * num
}

var output = mul(98)

console.log(output);

console.log(typeof mul);