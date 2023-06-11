const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [S, ...datas] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(sum) {
  let [curr, max] = [Math.round(Math.sqrt(sum / 2)), 0];

  while (true) {
    const res = getSum(curr);
    if (res <= sum) {
      max = curr;
      curr += 1;
    } else {
      break;
    }
  }
  return max;
}

function getSum(num) {
  return (num * (num + 1)) / 2;
}

console.log(solution(Number(S)));
