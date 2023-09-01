const a = [3,4,5]
const k = 2
const queries = [1,2] 


function circularArrayRotation(a, k, queries) {

    for(let i = 1; i <= k; i++){
        const number = a.pop()
        a.unshift(number)
    }

    return queries.map(q => a[q])
}

console.log(circularArrayRotation(a, k, queries))