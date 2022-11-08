
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