const arr = [1,4,4,4,5,3]
function migratoryBirds(arr) {
    const orderedArr = arr.sort().reverse()
    let maxRepeat = 0;
    let repeat = 0
    let number = 0

    for (let i = 0; i < orderedArr.length; i++){
        if(orderedArr[i - 1] === orderedArr[i]) i++;
        for (let j = 0; j < orderedArr.length; j++){
           if(orderedArr[i] === orderedArr[j]){
            repeat++
           }
        }
        if(maxRepeat <= repeat){
            maxRepeat = repeat;
            repeat = 0;
            number = orderedArr[i]
        }
        repeat = 0
    }
    return number;
}

// migratoryBirds(arr)
console.log(migratoryBirds(arr));