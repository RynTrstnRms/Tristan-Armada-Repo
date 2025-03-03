// Task #1: Calculate the Total Cost of Items
let taskOne = () => {
    let item1 = 15,
        item2 = 15,
        item3 = 15;

    let totalCost = item1 + item2 + item3;

    console.log("Task #1");
    console.log(`The total cost of the items is: $${totalCost}`);
}


// Task #2: Calculate the Average of Three Numbers
let taskTwo = () => {
    let num1 = 9,
        num2 = 7,
        num3 = 6;

    let average = (num1 + num2 + num3) / 3;

    console.log("\nTask #2");
    console.log(`The average is: ${average.toFixed(2)}`);
}


// Task #3: Odd or Even Checker
let taskThree = () => {
    let number = 15;

    console.log("\nTask #3");

    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}


// Task #4: Calculate Discounts
let taskFour = () => {
    let originalPrice = 100,
        discountPercent = 20;

    let discountAmount = (originalPrice * discountPercent) / 100;

    let discountedPrice = originalPrice - discountAmount;

    console.log("\nTask #4");
    console.log(`The discounted price is: $${discountedPrice}`);
}

// Bonus Task (Optional): Reverse Percentage Calculation
let bonusTask = () => {
    let finalPrice = 80;

    discountPercent = 20;

    originalPrice = finalPrice / (1 - discountPercent / 100);

    console.log("\nBonus Task");
    console.log(`The original price before the discount was: $${originalPrice}.`);
}


console.log();

taskOne();
taskTwo();
taskThree();
taskFour();
bonusTask();

console.log();