// 1. Vowel Count

function getCount(str) {
  const cut = str.split("");
  const comArr = ["a", "e", "i", "o", "u"];
  const result = cut.filter((x) => comArr.includes(x));

  return result.length;
}

// 2. 배열 회전시키기
let numbers = [1, 4, 9, 15];
let direction = "left";
function moveArr(numbers, direction) {
  let answer = [];

  const solution = () => {
    if (direction === "right") {
      for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
          answer[i] = numbers[numbers.length - 1];
        } else {
          answer[i] = numbers[i - 1];
        }
      }
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (i === numbers.length - 1) {
          answer[i] = numbers[0];
        } else {
          answer[i] = numbers[i + 1];
        }
      }
    }
  };
  solution();
  return answer;
}
console.log(moveArr(numbers, direction));
