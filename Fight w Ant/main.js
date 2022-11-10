function solution(hp) {
    const first = Math.floor(hp / 5);
    const second = Math.floor((hp - first * 5) / 3);
    const third = hp - first * 5 - second * 3;
    return first + second + third;
  }

  morse = { 
    '.-':'a', '-...':'b',
    '-.-.':'c', '-..':'d',
    '.':'e', '..-.':'f',
    '--.':'g', '....':'h',
    '..':'i', '.---':'j',
    '-.-':'k','.-..':'l',
    '--':'m', '-.':'n',
    '---':'o', '.--.':'p',
    '--.-':'q', '.-.':'r',
    '...':'s', '-':'t',
    '..-':'u', '...-':'v',
    '.--':'w', '-..-':'x',
    '-.--':'y','--..':'z'
}

const myKeys =Object.keys(morse)
// 키값만 따로 배열로 뺸 경우
const myValue =Object.values(morse)
let valueArr =[];

let letter = ".... . .-.. .-.. ---";
let spl= letter.split(' ');


// for (let i=0; i<spl.length; i++){
//     for(let a=0; a< myKeys.length; a++){
//         if(spl[i]=== myKeys[a]){
//             spl[i]= myKeys[a].
//         }
//     }
// }

const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    return letter
      .split(' ')
      .map(l => morse[l])
      .join('');

console.log(myKeys[0]);