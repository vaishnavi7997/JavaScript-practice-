var num1 = 98;
var num2 = 45;
var  operator = "div";

switch (operator) {
    case "add":
        console.log(num1 + num2);
        break;
    case "sub":
        console.log(num1 - num2);
        break;
    case "mul":
        console.log(num1 * num2);
        break;
    case "div":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}