
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

console.log(solution(money));