// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[3차] 자동완성
// https://school.programmers.co.kr/learn/courses/30/lessons/17685

function solution(words) {
  // 1) 단어를 정렬한다.
  const sorted = [...words].sort();

  let prefixs = [];
  let lengths = new Array(words.length).fill(0);
  for (let i = 0; i < words.length - 1; i++) {
    // 2) 각 단어마다 뒷 순서 단어와의 공통 접두어를 찾는다.
    const prefix = findPrefix(sorted[i], sorted[i + 1]);
    prefixs.push(prefix);
    // 3) 각 단어마다 입력 길이를 유추해, 최댓값으로 업데이트 해준다.
    lengths[i] = Math.max(lengths[i], prefix.length + (sorted[i].length > prefix.length ? 1 : 0));
    lengths[i + 1] = prefix.length + (sorted[i + 1].length > prefix.length ? 1 : 0);
  }
  console.log(sorted, prefixs, lengths);
  return lengths.reduce((a, b) => a + b, 0);
}

function findPrefix(w1, w2) {
  let len = Math.min(w1.length, w2.length);
  for (let i = 0; i < len; i++) {
    if (w1[i] !== w2[i]) {
      len = i;
      break;
    }
  }
  return w1.slice(0, len);
}
