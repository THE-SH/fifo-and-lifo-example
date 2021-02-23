const readline = require("readline-sync");

const array = new Array();

const options = readline.question("data type: ");

if (options === 'fifo') {
  while (true) {
    const number = readline.question("number > ");
    if (number === "remove") {
      array.pop();
      console.log(array);
    } else {
      array.push(number);
      console.log(array);
    }
  }
} else if (options === 'lifo') {
  while (true) {
    const number = readline.question("number > ");
    if (number === "remove") {
      array.shift();
      console.log(array);
    } else {
      array.unshift(number);
      console.log(array);
    }
  }
}
