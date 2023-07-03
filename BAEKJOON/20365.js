const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, text] = fs.readFileSync(filePath).toString().trim().split("\n");

let [bcnt, rcnt] = [0, 0];
for (let i = 0; i < n; i++) {
  if (text[i] !== text[i - 1] || i === 0) text[i] === "B" ? (bcnt += 1) : (rcnt += 1);
}
console.log(Math.min(bcnt + 1, rcnt + 1));
