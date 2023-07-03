// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = Array(n);
  for (let i = 0; i < n; i++) {
    const [line1, line2] = [
      arr1[i].toString(2).padStart(n, "0"),
      arr2[i].toString(2).padStart(n, "0"),
    ];
    answer[i] = line1
      .split("")
      .map((l, idx) => (l === "1" || line2[idx] === "1" ? "#" : " "))
      .join("");
  }
  return answer;
}
