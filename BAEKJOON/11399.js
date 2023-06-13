const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(num, times) {
  let [lasts, sum] = [0, 0];
  for (let i = 0; i < num; i++) {
    sum += lasts + times[i];
    lasts += times[i];
  }
  return sum;
}

console.log(
  solution(
    Number(N),
    numbers
      .split(" ")
      .map((num) => Number(num))
      .sort((a, b) => a - b)
  )
);
