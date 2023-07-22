// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677

// 자카드 유사도: J(A, B) = n(A ∩ B) / n(A ∪ B)
function solution(str1, str2) {
  const [set1, set2] = [makeSet(str1.toLowerCase()), makeSet(str2.toLowerCase())];
  const intersCnts = findIntersection(set1, set2);
  const unionCnt = set1.length + set2.length - intersCnts;
  return unionCnt > 0 ? Math.floor((intersCnts / unionCnt) * 65536) : 65536;
}

function findIntersection(set1, set2) {
  let cnt = 0;
  for (let i = 0; i < set1.length; i++) {
    const idx = set2.indexOf(set1[i]);
    if (idx < 0) continue;
    set1[i] = "";
    set2[idx] = "";
    cnt++;
  }
  return cnt;
}

function makeSet(str) {
  let result = [];
  for (let idx = 0; idx < str.length - 1; idx++) result.push(str[idx] + str[idx + 1]);
  return result.filter((e) => !/[^a-z]/g.test(e));
}
