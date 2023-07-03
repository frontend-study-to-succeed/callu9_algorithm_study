const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [S, stock] = fs.readFileSync(filePath).toString().trim().split("\n");

// 준현이는 주식을 살 수 있다면 무조건 최대한 많이 산다.
function bnp(S, stock) {
  let [money, cnt] = [Number(S), 0];
  for (let i = 0; i < stock.length; i++) {
    const buy = Math.floor(money / stock[i]);
    if (buy > 0) {
      money -= stock[i] * buy;
      cnt += buy;
    }
  }
  return money + cnt * Number(stock[13]);
}

// 3일 연속 가격이 전일 대비 상승하는 주식은 다음날 무조건 가격이 하락한다고 가정 => 전량 매도
// 3일 연속 가격이 전일 대비 하락하는 주식은 다음날 무조건 가격이 상승한다고 가정 => 전량 매수
function timing(S, stock) {
  const goingUp = (i) =>
    i >= 3 && stock[i] > stock[i - 1] && stock[i - 1] > stock[i - 2] && stock[i - 2] > stock[i - 3];

  const goingDown = (i) =>
    i >= 3 && stock[i] < stock[i - 1] && stock[i - 1] < stock[i - 2] && stock[i - 2] < stock[i - 3];

  let [money, cnt] = [Number(S), 0];
  for (let i = 3; i < stock.length; i++) {
    if (goingDown(i)) {
      money += cnt * stock[i];
      cnt = 0;
    } else if (goingUp(i)) {
      const buy = Math.floor(money / stock[i]);
      money -= stock[i] * buy;
      cnt += buy;
    }
  }
  return money + cnt * Number(stock[13]);
}

const answer = (S, stock) => {
  const [A, B] = [bnp(S, stock), timing(S, stock)];
  return A === B ? "SAMESAME" : A > B ? "BNP" : "TIMING";
};

console.log(
  answer(
    S,
    stock.split(" ").map((el) => Number(el))
  )
);
