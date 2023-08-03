const ar = [1,3,2,6,1,2]
const k = 3
const n = 6

function divisibleSumPairs(n, k, ar) {
    let qtdPairs = 0
    for(let i = 0; i < n-1; i++){
        for(let j = i+1 ; j < n; j++){
            let calc = ar[i] + ar[j]
            if(calc % k === 0) qtdPairs++
        }
    }
    return qtdPairs;
}

console.log(divisibleSumPairs(n, k, ar))