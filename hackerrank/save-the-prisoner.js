const n = 7; // prisioneiros
const m = 19; // doces
const s = 2; // cadeira


function saveThePrisoner(n, m, s) {
    let prisoners = n
    let candy = m
    let start = s
    
    let result = (start + candy -1) % prisoners

    return result === 0 ? prisoners : result
}

console.log(saveThePrisoner(n, m, s))