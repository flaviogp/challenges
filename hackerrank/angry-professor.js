const k =2;
const a = [0,-1,2,1];

function angryProfessor(k, a) {
    
    let studentsOnTime = 0;
    a.forEach((time) => {
        time <= 0 && studentsOnTime++
    })


    return studentsOnTime >= k ? 'NO' : 'YES';
}

console.log(angryProfessor(k, a))