function solution(N, prices) {
  const freeCnt = Math.floor(N / 3);
  let sum = prices.reduce((a, b) => a + b, 0);
  for (let idx = 1; idx <= freeCnt; idx++) {
    const freeIdx = 3 * idx - 1;
    sum -= prices[freeIdx];
  }
  return sum;
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line); // 입력받은 여러줄, line
}).on("close", function () {
  const [N, ...prices] = input;
  const output = solution(
    N,
    prices.map((price) => Number(price)).sort((a, b) => Number(b) - Number(a))
  ); // 문제 풀이 함수 호출
  console.log(output);
  process.exit(); // 프로세스 종료
});
