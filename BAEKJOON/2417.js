const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...datas] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(num) {
  let curr = Math.floor(Math.sqrt(num));

  while (true) {
    const res = curr * curr;

    if (res < num) {
      curr += 1;
    } else break;
  }
  return curr;
}

console.log(solution(N));
