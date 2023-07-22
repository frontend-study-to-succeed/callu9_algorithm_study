// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[1차] 프렌즈4블록
// https://school.programmers.co.kr/learn/courses/30/lessons/17679

// 좌측 위 블록을 기준으로 체크한다
const dir = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

function solution(m, n, board) {
  // 1. 맵을 회전시킨다. 지워진 애들은 ""로 채워주어서 알아서 중력 작용하게
  // 2. 깨질 수 있을 때까지(이전 개수와 동일한가로 체크) while문을 돌린다.
  //  2-1. 좌상단 블록부터 시작해서 3개를 체크하고, 깨질 수 있는 블록들이면 체크해준다.
  //  2-2. 깨진 블록이 있는 행은 중력을 작용시켜 빈칸을 넣어준다.
  let answer = 0;
  let map = rotateMap(m, n, board);
  while (true) {
    let v = new Array(n).fill().map((e) => Array(m).fill(false));
    for (let r = 0; r < n - 1; r++) {
      for (let c = 0; c < m - 1; c++) {
        findBlocks(n, m, map, v);
      }
    }
    const cnt = deleteBlocks(n, m, map, v);
    if (cnt === 0) break;
    answer += cnt;
  }
  return answer;
}

function deleteBlocks(height, width, map, v) {
  let cnt = 0;
  for (let ridx = 0; ridx < height; ridx++) {
    for (let cidx = 0; cidx < width; cidx++) {
      if (v[ridx][cidx]) {
        cnt++;
        map[ridx][cidx] = "";
      }
    }
    map[ridx] = map[ridx].join("");
    map[ridx] = [...map[ridx].split(""), ...Array(height - map[ridx].length).fill(" ")];
  }
  return cnt;
}

function findBlocks(height, width, map, v) {
  for (let r = 0; r < height - 1; r++) {
    for (let c = 0; c < width - 1; c++) {
      if (isBrokable(r, c, map)) {
        for (let i = 0; i < 4; i++) {
          v[r + dir[i][0]][c + dir[i][1]] = true;
        }
      }
    }
  }
}

function isBrokable(r, c, map) {
  if (r >= map.length - 1 || c >= map[0].length - 1 || map[r][c] === " ") return false;
  for (let i = 1; i < 4; i++) {
    if (map[r][c] !== map[r + dir[i][0]][c + dir[i][1]]) return false;
  }
  return true;
}

function rotateMap(m, n, map) {
  let result = new Array(n).fill("");
  map.map((row, ridx) => row.split("").map((col, cidx) => (result[cidx] = col + result[cidx])));
  return result.map((row, index) => row.split(""));
}
