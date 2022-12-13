// fs is a module used for working over  file systems
const fs = require("fs");

const textIn = fs.readFileSync("txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about Avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync("txt/output.txt", textOut);
console.log("File written");
