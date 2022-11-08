
let a ="apple";

let word;
function solution (a,word){
    word='p';
    
    const split = a.split('');

    for( let i=0; i< split.length ; i++){

        if( split[i]=== word){
            split.splice(i,1);
            i--;
        }
    }
    return split.join('')
    
}

console.log(solution(a));

// 각도기
function solution(angle) {
    var answer = 0;
    
    if (angle === 180){
        return 4
    }
    else if ( angle <180 && angle >90){
        return 3
    }
    
    else if ( angle ===90){
        return 2
    }
    else if ( angle <90){
        return 1
    }
}

function menu ( food,drink){
    const price_food =12000;
    const price_drink =2000;
    if(food<10){
        return (food*price_food) + (drink*price_drink);
    }

    else {
        const remain_drink = drink -parseInt(food/10);
        return (food*price_food) + ( remain_drink*price_drink);
    }
}