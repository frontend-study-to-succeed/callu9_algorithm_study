const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, drinks] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, drinks) {
  const [max, ...rest] = drinks;
  return max + rest.map((drink) => drink / 2).reduce((a, b) => a + b, 0);
}

console.log(
  solution(
    N,
    drinks
      .split(" ")
      .map((drink) => Number(drink))
      .sort((a, b) => Number(b) - Number(a))
  )
);
