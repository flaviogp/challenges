const n = 5;

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let count = 0;
    
    for(let i = 1; i <= n; i++){
        liked = parseInt(shared/2);
        count += liked
        shared = liked * 3
    }

    return count
}

console.log(viralAdvertising(n));