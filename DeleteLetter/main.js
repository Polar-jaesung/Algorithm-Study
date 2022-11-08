
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