// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[1차] 캐시
// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;

  var answer = 0;
  let cache = [];
  for (let city of cities) {
    const curr = city.toLowerCase();
    const idx = cache.indexOf(curr);
    if (idx < 0) {
      if (cache.length >= cacheSize) cache.shift();
      cache.push(curr);
      answer += 5;
    } else {
      cache = [...cache.slice(0, idx), ...cache.slice(idx + 1), curr];
      answer += 1;
    }
  }
  return answer;
}
