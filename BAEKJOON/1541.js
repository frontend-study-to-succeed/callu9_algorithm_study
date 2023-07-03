const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(arr) {
  while (true) {
    const idx = arr.indexOf("+");
    if (idx < 0) break;
    arr = [
      ...arr.slice(0, idx - 1),
      Number(arr[idx - 1]) + Number(arr[idx + 1]),
      ...arr.slice(idx + 2),
    ];
  }
  return arr.reduce(
    (acc, curr, idx) => (idx > 0 && curr !== "-" ? acc - Number(curr) : acc),
    Number(arr[0])
  );
}
console.log(solution(input.split(/(\+|\-)/g)));
console.log(2 ** 3);
