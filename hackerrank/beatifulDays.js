const i = 20
const j = 23
const k = 6

function beautifulDays(i, j, k) {
    let inverseNumber = 0;
    let countBeautifulDays = 0;

    for(let l = i; l <= j; l++){
        inverseNumber = l.toString().split('').reverse().join('');
        if((l - Number(inverseNumber)) % k === 0) countBeautifulDays++
    }
    return countBeautifulDays;
}

console.log(beautifulDays(i, j, k))