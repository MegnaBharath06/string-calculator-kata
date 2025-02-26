String Calculator Kata
🚀 TDD Kata - String Calculator in JavaScript

📌 Overview
This project is a String Calculator Kata implemented using Test-Driven Development (TDD) principles in JavaScript. It helps developers practice incremental development, unit testing, and refactoring while following the TDD cycle: Red → Green → Refactor.

🛠️ Features
✅ Parses and calculates numbers from a string input.
✅ Supports addition of multiple numbers.
✅ Handles different delimiters (e.g., commas, new lines).
✅ Detects and reports negative numbers.
✅ Extensible for future enhancements.

📂 Project Structure
php
Copy
Edit
📦 string-calculator-kata
 ┣ 📂 src                # Main source code
 ┃ ┣ 📜 calculator.js    # Core logic for string calculator
 ┃ ┗ 📜 index.js         # Entry point for execution
 ┣ 📂 tests              # Unit test cases
 ┃ ┗ 📜 calculator.test.js  # Jest test cases
 ┣ 📜 package.json       # Project dependencies and scripts
 ┣ 📜 README.md          # Documentation (You are here!)
 ┗ 📜 .gitignore         # Files to ignore in version control
🚀 Installation & Usage
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/MegnaBharath06/string-calculator-kata.git
cd string-calculator-kata
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Run Tests (TDD)
sh
Copy
Edit
npm test
4️⃣ Run the Calculator
sh
Copy
Edit
node src/index.js
🧪 Testing & TDD
This project follows Test-Driven Development (TDD) using Jest.
To run all test cases:

sh
Copy
Edit
npm test
Example Test Case
js
Copy
Edit
test('should return sum of numbers in a string', () => {
  expect(stringCalculator("1,2,3")).toBe(6);
});
🏗️ Future Enhancements
📌 Support for multiplication and division.
📌 Custom error handling for incorrect inputs.
📌 Integration with a simple UI for user interaction.

👩‍💻 Contributing
Fork the repo.
Create a feature branch:
sh
Copy
Edit
git checkout -b feature-name
Commit your changes:
sh
Copy
Edit
git commit -m "Added feature-name"
Push your branch:
sh
Copy
Edit
git push origin feature-name
Submit a Pull Request 