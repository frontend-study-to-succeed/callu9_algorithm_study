const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...datas] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(num, weights) {
  return Math.max(...weights.map((w, idx) => w * (num - idx)));
}

console.log(
  solution(
    Number(N),
    datas.map((num) => Number(num)).sort((a, b) => a - b)
  )
);
