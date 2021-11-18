// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const message = function () {
//   console.log('\n');
//   rl.on('line', (input) => {
//     console.log(`Say: ${input}`);
//   });
// };

// const setupInput = function() {
//   //connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function (key) {
//   //process.stdout.write(key);
//   if (key === '\u0003') {
//     process.exit();
//   }
//   if (key === '\u0074') {
//     message();
//   }
// };

// setupInput();