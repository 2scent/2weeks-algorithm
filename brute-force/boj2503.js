// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [n, ...lines] = stdin.split('\n');

const hints = lines.map((line) => line.split(' ').map(Number));

let answer = 0;
for (let a = 1; a < 10; a++) {
  // 100의 자리수
  for (let b = 1; b < 10; b++) {
    // 10의 자리수
    for (let c = 1; c < 10; c++) {
      // 1의 자리수
      if (a === b || b === c || c === a) continue;

      // 숫자가 정해졌다면
      let count = 0;
      for (const hint of hints) {
        const [number, strike, ball] = hint;

        let strikeCount = 0;
        let ballCount = 0;

        // a, b, c 숫자를
        // number와 비교해서
        // 자리수를 나눠서, strike ball을 측정하는 부
        const numberString = String(number);
        for (let i = 0; i < 3; i++) {
          const num = Number(numberString[i]);

          if (num === a) {
            if (i === 0) {
              strikeCount++;
            } else {
              ballCount++;
            }
          } else if (num === b) {
            if (i === 1) {
              strikeCount++;
            } else {
              ballCount++;
            }
          } else if (num === c) {
            if (i === 2) {
              strikeCount++;
            } else {
              ballCount++;
            }
          }
        }

        if (strike === strikeCount && ball === ballCount) {
          count++;
        }
      }

      if (count === Number(n)) {
        answer++;
      }
    }
  }
}

console.log(answer);
