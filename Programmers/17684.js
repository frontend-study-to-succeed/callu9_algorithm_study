// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[3차] 압축
// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  let [results, dicts] = [[], "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  let [currIdx, currWord] = [0, msg[0]];
  while (currIdx < msg.length - 1) {
    // 가장 긴 문자열을 찾기 위해 w+c(현재문자+다음문자)를 구한다.
    let nextWord = currWord + msg[currIdx + 1];
    let idx = dicts.indexOf(nextWord);
    if (idx < 0) {
      // 만약 사전에 없는 문자라면 등록해주고, 현재문자 w 색인번호를 찾는다.
      results.push(dicts.indexOf(currWord) + 1);
      currWord = msg[++currIdx];
      dicts.push(nextWord);
    } else {
      // 만약 사전에 있는 문자라면, 인덱스를 1 증가시키고 넘어간다
      currWord = nextWord;
      currIdx++;
    }
  }
  // 마지막 문자열의 색인번호를 찾는다.
  results.push(dicts.indexOf(currWord) + 1);
  return results;
}
