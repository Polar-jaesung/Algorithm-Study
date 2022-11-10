
let numbers=[1,2,3,4,5]
let n1=2;

function cuttingArray(numbers,num1,num2) {

    const splArr= numbers.slice(num1,num2+1);
//  splice 대신 slice 로 바꿧다.
    return splArr;
 
};

let age =139;
function findEng (age){
    

    const spl = age.toString().split('');
    for(let i=0; i< spl.length ; i++){
        if(spl[i]==='0'){
            spl[i]='a';
        }

        else if(spl[i]==='1') {
            spl[i]='b';
        }

        else if(spl[i]==='2') {
            spl[i]='c';
        }

        else if(spl[i]==='3') {
            spl[i]='d';
        }
        else if(spl[i]==='4') {
            spl[i]='e';
        }
        else if(spl[i]==='5') {
            spl[i]='f';
        }
        else if(spl[i]==='6') {
            spl[i]='g';
        }
        else if(spl[i]==='7') {
            spl[i]='h';
        }
        else if(spl[i]==='8') {
            spl[i]='i';
        }
        else if(spl[i]==='9') {
            spl[i]='j';
        }
    }
    return spl.join('');
}

let sick =[3,10,7,44,30,1];

function urgent(sick){
    let cnt=1;
    let order=0;
    let newSick;
 for(let i=0; i<sick.length; i++){
    if (sick[i] >= order){
        
        order = sick[i];
        
        newSick[i]=cnt;
    }

   
}



cnt ++;

function isFirst(elem){
 if(elem === order)
  return true;
}

const urgent_list = sick.filter(isFirst);

 return ` ${sick} 하고 ${newSick[i]} ` 
}

// 순서쌍의 개수

let n;
let cnt=0;
function func(n){
 n=100;

for(let i=1; i <=n ; i++){
    if(n%i===0){
        cnt++;
    }
}
return cnt;

}

console.log(func());
