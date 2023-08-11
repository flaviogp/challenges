
const n = 4

function utopianTree(n) {
    let lengthTree = 0;
    
    if (n === 0) return lengthTree = 1;

    for(let i = 0; i <= n; i++){
        if(i % 2 === 0){
            lengthTree+=1;
        }else{
            lengthTree*=2;
        }
    }

    return lengthTree
}


console.log(utopianTree(n))