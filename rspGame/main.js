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

console.log(findDot(dot));