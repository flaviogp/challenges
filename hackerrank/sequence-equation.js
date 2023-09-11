const p = [5,2,1,3,4]

function permutationEquation(p) {
    const newArr = [];
    const result = [];
    for (let i = 0; i < p.length; i++) {
        newArr[p[i] - 1] = i + 1;
    }  
    for (let i of newArr) {
        result.push(newArr[i - 1]);
    }
    return result;
}


console.log(permutationEquation(p))