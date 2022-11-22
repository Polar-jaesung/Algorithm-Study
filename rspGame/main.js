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

function twoArr(num_list, n) {
    var answer = [];

    // slice는 (a,b)일때 'a'번째 배열부터 'b-1'번째 배열까지 끊는다는 의미
    for(let i=0; i<num_list.length; i = n+i){
        answer.push( num_list.slice(i,i+n) );
    }
    return answer;
}
// 5. 공 던지기(해결 못함)ㅌ
// 6. Get the Middle Character


function getMiddle(s)
{
    let cut = s.split('');
    if(cut.length % 2 ==0){
        let point = Math.floor(cut.length / 2);
        let result = cut.splice(point-1,2);
        return result.join("");
    }

    else{
        let point = cut.length /2;
        let result = cut.splice(point,1);
        return result.join("");
    }
//   짝수면 2개 , 홀수면 1개 (length를 찾으면 짝수일 경우 전체 길이가 홀수!)
// 4개일경우 => length : 3 , 중간은 floor(length/2), +1
// 7개일 경우 => length: 6, 중간은 
// splice를 쓰면 되겠네
}

// 7. Mumbling(직접 못풀었다) 확실히 외워버리자

let s ="abcd"

function accum(s) {
	return s.split('')
    .map((c, i) => (c.toUpperCase() + c.toLowerCase()
    .repeat(i))).join('-');
}
