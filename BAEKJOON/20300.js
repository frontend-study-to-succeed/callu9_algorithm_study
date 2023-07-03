const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, nums] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, arr) {
  let max = N % 2 === 1 ? BigInt(arr.pop()) : 0n;
  arr.forEach((curr, idx) => {
    if (idx >= arr.length / 2) return;
    const sum = BigInt(curr) + BigInt(arr[arr.length - 1 - idx]);
    if (max < sum) max = sum;
  });
  return String(max);
}

console.log(
  solution(
    Number(N),
    nums.split(" ").sort((a, b) => (BigInt(a) > BigInt(b) ? 1 : -1))
  )
);
