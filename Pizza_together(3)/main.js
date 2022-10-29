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

console.log(pizza(slice,people));