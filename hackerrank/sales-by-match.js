const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    const sortedArr = ar.sort((a,b)=> a-b)
    let pairs = 0;
    for (let i = 0; i < n; i++) { 
        if (sortedArr[i] === sortedArr[i+1]) {
            pairs++
            i++;
        } 
    }
    return pairs;
}


console.log(sockMerchant(n, ar))