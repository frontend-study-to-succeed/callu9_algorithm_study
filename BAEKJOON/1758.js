const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(tips) {
  const newArr = tips.map((tip, idx) => (tip -= idx));
  return newArr.filter((a) => a >= 0).reduce((a, b) => a + b, 0);
}

console.log(solution(numbers.sort((a, b) => Number(b) - Number(a))));
