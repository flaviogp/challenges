const keyboards = [4];
const drives= [5];
const b = 5;

function getMoneySpent(keyboards, drives, b) {
    let expensivePrice = -1;

     for(let i = 0; i < drives.length; i++){
        for(let j = 0; j < keyboards.length; j++){
            const sum = drives[i] + keyboards[j];
            if(sum <= b && sum > expensivePrice) expensivePrice = sum
        }
    }

    return expensivePrice
}

console.log(getMoneySpent(keyboards, drives, b))