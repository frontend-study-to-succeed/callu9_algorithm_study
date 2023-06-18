const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, lengths, prices] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(num, lengths, prices) {
  let [sum, curr] = [BigInt(0), prices[0]];
  for (let idx = 0; idx < num - 1; idx++) {
    if (prices[idx] <= curr) {
      curr = prices[idx];
    }
    sum += lengths[idx] * curr;
  }
  return sum.toString();
}

console.log(solution(N, lengths.split(" ").map(BigInt), prices.split(" ").map(BigInt)));
