// Conditions Assignment

console.log("Conditions Assignment");

// Task 1: Grading System
console.log("\nTask 1: Grading System");

let score = 65;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score <= 89) {
    grade = "B";
} else if (score >= 70 && score <= 79) {
    grade = "C";
} else if (score >= 60 && score <= 69) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    grade = "Invalid score";
}

console.log(`Score: ${score}, Grade: ${grade}`);

// Task 2: Weather Advisor
console.log("\nTask 2: Weather Advisor");

let temperature = 22;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

// Task 3: Eligibility Checker
console.log("\nTask 3: Eligibility Checker");

let age = 17;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

// Task 4: Ticket Price Calculator
console.log("\nTask 4: Ticket Price Calculator");

age = 25;
let isMember = true;
let ticketPrice;

if (age < 12) {
    ticketPrice = "Free";
} else if (isMember) {
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}

console.log(`Age: ${age}, Member: ${isMember}, Ticket Price: ${ticketPrice}`);

// Task 5: Challenge Task (Optional): Leap Year Checker
console.log("\nTask 5:Leap Year Checker");

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let testYears = [2025, 1980, 2000, 2050, 2024];

for (let year of testYears) {
    console.log(`\n${year} is${isLeapYear(year) ? '' : ' not'} a leap year.`);
}