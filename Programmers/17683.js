// 프로그래머스_2018 KAKAO BLIND RECRUITMENT_[3차] 방금그곡
// https://school.programmers.co.kr/learn/courses/30/lessons/17683

const sharps = "C#, D#, F#, G#, A#".split(", ");

function solution(m, musicinfos) {
  let result = "(None)";
  let max = 0;

  for (let info of musicinfos) {
    const [start, end, musicNm, sheet] = info.split(",");
    const [starts, ends] = [start.split(":"), end.split(":")];
    const minutes =
      (Number(ends[0]) - Number(starts[0])) * 60 + Number(ends[1]) - Number(starts[1]);
    const changeResult = changeScales(sheet);

    const repeatResult = makeRepeat(minutes, changeResult);

    if (repeatResult.includes(changeScales(m)) && minutes > max) {
      result = musicNm;
      max = minutes;
    }
  }
  return result;
}

function makeRepeat(minutes, str) {
  const result =
    minutes > str.length
      ? str.repeat(Math.ceil(minutes / str.length)).slice(0, minutes)
      : str.slice(0, minutes);
  return result;
}

function changeScales(str) {
  let result = str;
  sharps.map((sharp) => (result = result.replaceAll(sharp, sharp[0].toLowerCase())));
  return result;
}
