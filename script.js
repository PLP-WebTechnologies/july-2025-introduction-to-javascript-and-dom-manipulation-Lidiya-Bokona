// Part 1: Variables and Conditionals
const button = document.getElementById("submitButton");
const resultsDiv = document.getElementById("results");

button.addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    let message = userInput ? `You entered: ${userInput}` : "Please enter something!";
    resultsDiv.textContent = message;
});

// Part 2: Functions
function calculateSquare(num) {
    return num * num;
}
function formatString(str) {
    return str.trim().toUpperCase();
}

// Example usage of functions
console.log(`Square of 5 is: ${calculateSquare(5)}`); // Output: 25
console.log(`Formatted String: ${formatString("   hello world   ")}`); // Output: HELLO WORLD

// Part 3: Loops
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) console.log(i); // Output: 1, 2, 3, 4, 5

let countdown = 5;
console.log("Countdown:");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// Part 4: DOM Manipulation
button.addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    resultsDiv.textContent = `You entered: ${userInput}`;
    resultsDiv.style.color = "blue"; // Change text color
    resultsDiv.style.fontSize = "20px"; // Change font size
});
