const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

// 4 2
function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    let countMax = 0
    let countMin = 0
    scores.forEach(score => {
        if(score < min){
            min = score;
            countMin++;
        }
        if (score > max){
            max = score;
            countMax++;
        }
    });

    const brokeRecord = [countMax, countMin]
    return brokeRecord;
}

console.log(breakingRecords(scores))