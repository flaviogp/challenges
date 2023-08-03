const year = 1918;

function dayOfProgrammer(year) {
    const daysOfYears = [31,28,31,30,31,30,31,31,30,31,30,31]
    let day = 0

    for(let i=0; i < daysOfYears.length; i++){
        if(day + daysOfYears[i] >= 256){
            day = 256 - day;
            if(year === 1918){
                return `${day + 13}.0${i+1}.${year}`
            }
            if(year <= 1917){
                return year % 4 !==0 ? 
                        `${day}.0${i+1}.${year}` :
                        `${day-1}.0${i+1}.${year}`;
            }
            if(year > 1918){
                if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
                    return `${day-1}.0${i+1}.${year}`
                }
                return `${day}.0${i+1}.${year}` 
            }
        }
        day = day + daysOfYears[i];
    }


}

console.log(dayOfProgrammer(year))
console.log(1712 % 4)


// 1700 - 1918 juliano -- ano bissexto 4 em 4 anos
// 1919 - gregoriano -- ano bissexto divisivel por 400 ou divisivel por 4 e não por 100
//