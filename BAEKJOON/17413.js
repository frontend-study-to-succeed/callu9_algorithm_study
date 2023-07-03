const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const S = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  // // 1) 태그 괄호로 자른다
  // let words = str.split(/(\<|\>)/g).filter((el) => el);
  // for (let i = 0; i < words.length; i++) {
  //   // 2) 태그는 건너 뛰고
  //   if (words[i] === "<" || words[i] === ">") {
  //     i += 2;
  //     continue;
  //   }
  //   // 3) 나머지 문자열은 공백을 기준으로 자른 후 뒤집는다
  //   words[i] = words[i]
  //     .split(/(\s)/g)
  //     .map((el) => el.split("").reverse().join(""))
  //     .join("");
  // }
  let words = str.split(/(<[a-z ]+>)/g);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "" || words[i][0] === "<") continue;
    words[i] = words[i]
      .split(/(\s)/g)
      .map((el) => el.split("").reverse().join(""))
      .join("");
  }
  console.log(words.join(""));
}

solution(S);
