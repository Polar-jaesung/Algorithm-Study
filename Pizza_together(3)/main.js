// 1. 프로그래머스 피자나눠먹기(3) (숏코딩 완료)
function solution(slice, n) {
    return Math.ceil(n/slice)
  }



// 2. 배열의 평균값 (숏코딩 완료)
let numbers=[1,2,3,4]
function solution(numbers) {
    const result =
        numbers.reduce((a,b) => a+b,0)/ numbers.length;
        return  result;
}


// 옷가게 할인 받기 
function solution(price) {
    
    
    if(price>=100000 && price <300000){
        return Math.floor(price*95/100)
    }
    
    else if(price >=300000 && price<500000){
        return Math.floor(price*90/100)
    }
    
    else if(price >=500000){
         return Math.floor(price*0.8)
    }
    else{
        return price
    }
}