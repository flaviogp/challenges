function birthdayCakeCandles(candles) {
    let bigCandle = 0;
    let count = 0;
    candles.sort((a, b)=> a - b);

    bigCandle = candles[candles.length - 1];

    for ( let candle in candles ){
        candles[candle] === bigCandle && count++;
    }

    return count;
}

console.log(birthdayCakeCandles([4,4,5,5,3,2,1,6]));