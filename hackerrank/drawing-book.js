const n = 9;
const p = 8;


function pageCount(n, p) {
    let count = 0;
    const half = n / 2;
    if (p === n || p === 1 || p === n-1 && n%2 !== 0) return 0;
    if(p === n-1 && n%2 === 0 ) return 1
    if(half >= p){
        for(let j = 1; j < n; j += 2){
            if(j >= p) break;
            count++
        }
    }else if(half <= p){
        for(let k = n-1; k > 0; k -= 2){
            if(k <= p) break;
            count++
        }
    }
    return count
}

console.log(pageCount(n, p));


// const pages = [];
// for(let i = 1; i <= n; i++){
//     pages.push(i)
// }
// const inversePages = [...pages].sort((a,b) => b-a)