// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[3차] 파일명 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const spl = files
    .map((file) => [file, ...file.toLowerCase().split(/([0-9]+)/)])
    .sort(function (a, b) {
      const [aorg, ahead, anum, ...atail] = a;
      const [borg, bhead, bnum, ...btail] = b;
      if (ahead === bhead) return Number(anum) - Number(bnum);
      return ahead > bhead ? 1 : -1;
    });
  return spl.map((el) => el[0]);
}
