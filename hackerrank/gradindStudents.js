function gradingStudents(grades) {
    let newGrades= []
    let nextMultiple = 0; 
 for (let grade of grades){
    if (grade < 38){
        newGrades.push(grade);
    } else if(grade >= 38 ){
        nextMultiple = (grade - (grade % 5)) + 5;
        nextMultiple - grade < 3 ? newGrades.push(nextMultiple) : newGrades.push(grade);
    }
 }
 return newGrades;
}

console.log(gradingStudents([84, 29, 57]));