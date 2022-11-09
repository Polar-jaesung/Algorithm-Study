
let money=15000;

function solution (money){
    let answer = [];
    let coffee = 5500;
    
    let cupCoffee = Math.floor(money/coffee);
    let remainMoney = money- (cupCoffee*coffee);

    answer.push(cupCoffee);
    answer.push(remainMoney);

    console.log(remainMoney);
    return answer;
    
}

// 나이 출력 문제

function ageFind(age){
    let answer=0;

    let realYear = age-1;

    return answer = 2022-realYear;

    // 1살 ; 22년 , 2살: 21년, 3살: 20년
}

// 배열 뒤집기 문제



function solution(num_list) {
    let answer = [];
    let a=num_list.length-1;
    

    for(a; a>=0 ; a--){
        
        answer.push(num_list[a]);
    }
    
    return answer
}


let my_string='goodbye';
let n=2;

function solution(my_string, n) {
    
    var answer = '';
    let cnt = 0;
    
    for(let i=0; i< my_string.length; i++){
        const repeatStr = my_string[i];
        let repeatCnt =0;

        while (repeatCnt < n){
            answer = answer + repeatStr;
            repeatCnt++;
        }
        cnt ++;

    }

    
    return answer;
}
