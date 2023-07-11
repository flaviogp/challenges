function getTotalX(a, b) {
    const firstNumber = [...a].pop();
    const lastNumber = [...b].shift();
    let count = 0 ;
    for(let i = firstNumber; i <= lastNumber; i++){
       if(a.every(value => i % value === 0) && b.every(value => value % i === 0)){
            count++
       } 
    }
    return count;

}