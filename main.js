





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

 