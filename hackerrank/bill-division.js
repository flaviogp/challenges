
const bill = [3,10,2,9];
const k = 1;
const b = 12;

function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    const billDivision = bill.reduce((sum, acc) => sum + acc, 0) / 2;

    if(billDivision === b){
        return console.log('Bon Appetit');
    }else{
        return console.log(b - billDivision);
    }


}

bonAppetit(bill, k, b);