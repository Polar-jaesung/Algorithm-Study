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