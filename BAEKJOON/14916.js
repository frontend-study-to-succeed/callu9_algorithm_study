const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...datas] = fs.readFileSync(filePath).toString().trim().split("\n");

// 동전 개수가 최소가 되려면, 5원짜리가 최대인 경우를 찾아야 한다.
// 나머지 1이 되면, 5원짜리 1개를 쪼개서 2원짜리 3개를 만들 수 있다.
function solution(num) {
  if (num < 2 || num === 3) return -1;

  let [cnt1, cnt2, rest] = [Math.floor(num / 5), Math.floor((num % 5) / 2), (num % 5) % 2];
  if (rest === 1) {
    cnt1 -= 1;
    cnt2 += 3;
    rest = 0;
  }
  return cnt1 + cnt2;
}

console.log(solution(Number(N)));
