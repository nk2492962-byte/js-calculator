const prompt = require("prompt-sync")();

let NAME = prompt("please enter your name: ");

console.log("=====================================");
console.log("WELCOME", NAME, "TO JS CALCULATOR");
console.log("=====================================");

let CHOICE = "yes";

while (CHOICE.toLowerCase() === "yes") {

    console.log("\nChoose operation:");
    console.log("1 + ADDITION");
    console.log("2 - SUBTRACTION");
    console.log("3 * MULTIPLICATION");
    console.log("4 / DIVISION");
    console.log("5 % MODULUS");
    console.log("6 ** EXPONENTIATION");

    let option = Number(prompt("enter your choice: "));

    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));

    let result;

    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        case 5:
            result = num1 % num2;
            break;
        case 6:
            result = num1 ** num2;
            break;
        default:
            console.log("Invalid option");
            continue;
    }

    console.log("Result:", result);

    CHOICE = prompt("Do you want another calculation? (yes/no): ");
}

console.log("Thank you", NAME);

console.log("🚀 Keep learning JavaScript!");