// Part 1: Creating a file named "welcome.txt" containing "Hello Node"
const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File "welcome.txt" created successfully.');
});


// Part 2: Reading and console.logging data from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Data read from "welcome.txt":', data);
});
