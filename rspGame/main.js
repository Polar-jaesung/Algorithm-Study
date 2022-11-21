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

// 2. 구슬을 나누는 경우의 수

