const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [N, ...times] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, times) {
  let [cnt, curr] = [1, times[0]];
  for (let i = 1; i < N; i++) {
    if (times[i][0] >= curr[1]) {
      curr = times[i];
      cnt += 1;
    }
  }
  console.log(cnt);
}

solution(
  Number(N),
  times
    .map((time) => time.split(" ").map((t) => Number(t)))
    .sort((a, b) => (a[1] > b[1] ? 1 : a[1] === b[1] && a[0] > b[0] ? 1 : -1))
);
