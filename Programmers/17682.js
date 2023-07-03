// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const exp = { S: "**1", D: "**2", T: "**3", "#": "*(-1)", "*": "*2" };

function solution(dartResult) {
  let arr = dartResult.split(/(S|D|T|\*|\#)/g).filter((word) => word !== "");
  for (let del of Object.keys(exp)) {
    while (true) {
      const idx = arr.indexOf(del);
      if (idx < 0) break;
      calc(del, arr, idx);
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function calc(del, arr, idx) {
  if (del === "*") {
    if (idx < 2) arr.splice(idx - 1, 2, arr[idx - 1] * 2);
    else arr.splice(idx - 2, 3, arr[idx - 2] * 2, arr[idx - 1] * 2);
  } else arr.splice(idx - 1, 2, eval(arr[idx - 1] + exp[del]));
}
