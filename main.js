// 1.숫자 비교하기 (숏코딩 완료)
function compare(num1,num2){
    return num1 ===num2 ? 1 : -1;
}

// 2. 분수의 덧셈 (숏코딩 완료)
function solution(denum1, num1, denum2, num2) {
    //분자 문모를 합친 값을 2개의 변수가 아닌 <한 배열에> 넣기(숏코딩)
    let [denum, num] = [denum1*num2 + denum2*num1, num1*num2 ]
    
    while(true) {
        let isContinue = false
        const min = denum < num ? denum : num

        for (let i=min; i>=2; i--) {
            if (denum % i === 0 && num % i === 0) {
                denum = denum / i
                num = num / i
                isContinue = true
                break
            }
        }
        if (!isContinue) {
            break
        }
    }
    return [ denum, num ]
}     

// 3. 배열 두 배 만들기
function doubleArr(numbers) {
    return answer= numbers.map(number => number*2);
}



let people=4;

function solution(people){

    let i=1;
    let result=0;
    let pizzaNum;
    while(true){
        let eatSame = people*i;
        if( eatSame % 6 ==0){
            result =eatSame;
            return pizzaNum = result/6;

        }
        i++;
    }
     
    
   
   
};

console.log((solution(people)) );

 