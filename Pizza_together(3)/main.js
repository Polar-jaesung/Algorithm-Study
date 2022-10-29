let slice=7;
let people=22;
// 프로그래머스 피자나눠먹기(3)
function pizza (slice,people){
    let i=1;
    
    
    while(true){
        const pizzaNum = slice * i;
        if(pizzaNum >= people) {
        break;}
        
        else{
        i++;}
    }
    return i
    
};

// 배열의 평균값
function solution(numbers) {
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        
        sum+=numbers[i];        
    }
    return sum/numbers.length;
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