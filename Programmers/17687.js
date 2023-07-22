// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[3차] n진수 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17687
function solution(n, t, m, p) {
  let answer = "";
  const str = new Array(t * m)
    .fill()
    .map((e, index) => index.toString(n).toUpperCase())
    .join("");
  for (let i = 0; i < t; i++) {
    const idx = m * i + p - 1;
    answer += str[idx];
  }
  return answer;
}
