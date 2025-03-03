// Arrays and Objects Assignment

console.log("Arrays and Objects Assignment");

// Task 1: Create and Use an Object
console.log("\n--- Task 1: Create and Use an Object ---");

let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    isRead: false
};

console.log("Using dot notation:");
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Pages:", book.pages);
console.log("Read:", book.isRead);

console.log("\nUsing bracket notation:");
console.log("Title:", book["title"]);
console.log("Author:", book["author"]);
console.log("Pages:", book["pages"]);
console.log("Read:", book["isRead"]);

book.isRead = true;
book.genre = "Fantasy";

console.log("\nUpdated book object:");
console.log(book);

// Task 2: Create and Modify an Array of Objects
console.log("\n--- Task 2: Create and Modify an Array of Objects ---");

let movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994
    }
];

console.log("Title of the second movie:", movies[1].title);

movies.push({
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999
});

movies[0].year = 2023;

console.log("\nUpdated movies array:");
console.log(movies);

// Task 3: Combine Objects and Arrays
console.log("\n--- Task 3: Combine Objects and Arrays ---");

let student = {
    name: "John Doe",
    age: 22,
    subjects: ["Math", "Science", "History"]
};

console.log("First subject:", student.subjects[0]);

student.subjects.push("Computer Science");

console.log("\nUpdated student object:");
console.log(student);

