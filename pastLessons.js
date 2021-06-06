const amount = 12;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}
console.log(`hey, it is my first node app!`);

// Write "node app.js" command in the integrated terminal and watch the output

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

setInterval(() => {
  console.log("hello world");
}, 1000);

// Modules

const john = "John";
const peter = "Peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi(john);
sayHi(peter);

// Build-in Modules
const os = require("os");

// Info about the current user
const user = os.userInfo();
console.log(user);

//Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);

// Path Module
const path = require("path");

console.log("path separation is: ", path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log("file path is: ", filePath);

const base = path.basename(filePath);
console.log("base file is: ", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("absolute path is: ", absolute);

// FS Module (Sync)
const { readFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

// HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is our about page");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);

// NPM
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package), you can create it with the following ways below:
// manual approach (create package.json in the root, create properties, etc.);
// npm init (step by step, press enter to skip);
// npm init -y (everything default).
