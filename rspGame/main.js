// 1. 가위바위보 
let rsp = '205';

function rspGame(rsp) {
    var answer = '';
    let spl = rsp.split('');

    for(let i=0; i<spl.length; i++){
        spl[i] === '2' ? answer +='0' 
        : spl[i] === '0' ? answer +='5'
        : answer += '2'
    }

    return answer;
    // 가위: 2 바위: 0 보: 5 
}

// 2. 구슬을 나누는 경우의 수(해결 못함)

function sharingBall(balls, share) {
    var answer = 0;
    return answer;
}

// 3. 점의 위치 구하기


let dot=[-1,4]
function findDot(dot) {
    let answer =0;
    for(let i=0; i<dot.length; i++){
        answer = dot[0]>0 && dot[1]>0 ? 1
        : dot[0] > 0 && dot[1] <0 ? 4
        : dot[0] < 0 && dot[1] >0 ? 2
        : 3
    }
    return answer;
}

// 4. 2차원으로 만들기

let num_list=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let n=3;
function twoArr(num_list, n) {
    var answer = [];

    // slice는 (a,b)일때 'a'번째 배열부터 'b-1'번째 배열까지 끊는다는 의미
    for(let i=0; i<num_list.length; i = n+i){
        answer.push( num_list.slice(i,i+n) );
    }
    return answer;
}

console.log(twoArr(num_list, n));