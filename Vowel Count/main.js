// 1. Vowel Count

function getCount(str) {
  const cut = str.split("");
  const comArr = ["a", "e", "i", "o", "u"];
  const result = cut.filter((x) => comArr.includes(x));

  return result.length;
}

// 2. 배열 회전시키기

// function moveArr(numbers, direction) {
//   let answer = [];

//   const solution = () => {
//     if (direction === "right") {
//       for (let i = 0; i < numbers.length; i++) {
//         if (i === 0) {
//           answer[i] = numbers[numbers.length - 1];
//         } else {
//           answer[i] = numbers[i - 1];
//         }
//       }
//     } else {
//       for (let i = 0; i < numbers.length; i++) {
//         if (i === numbers.length - 1) {
//           answer[i] = numbers[0];
//         } else {
//           answer[i] = numbers[i + 1];
//         }
//       }
//     }
//   };
//   solution();
//   return answer;
// }
let numbers = [1, 4, 9, 15];
let direction = "right";
// 배열 회전시키기 (숏코딩 연습)

function moveArr2(numbers, direction) {
  let answer = [];

  if (direction == "right") {
    numbers.unshift(numbers.pop());
  } else {
    let shiftArr = numbers.shift();
    numbers.push(shiftArr);
  }

  answer = numbers;

  return answer;
}

// 3.약수의 합
const yakSu = (n) => {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
};
