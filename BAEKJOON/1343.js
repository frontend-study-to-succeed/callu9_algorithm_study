const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const board = fs.readFileSync(filePath).toString().trim();

function solution(board) {
  let map = board.split(".");
  if (map.filter((b) => b.length % 2 !== 0).length > 0) return -1;

  for (let idx = 0; idx < map.length; idx++) {
    const [acnt, bcnt] = [Math.floor(map[idx].length / 4), (map[idx].length % 4) / 2];
    map[idx] = [new Array(acnt).fill("AAAA").join(""), new Array(bcnt).fill("BB").join("")].join(
      ""
    );
  }
  return map.length > 1 ? map.join(".") : map[0];
}

console.log(solution(board));
