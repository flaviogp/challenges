function timeConversion(s) {
    const amOrPm =  s.slice(-2);
    let HourTime =  s.slice(0, 2);
    const minutes = s.slice(2, -2);
    let timePm = 0;
    let newTime = 0; 

    if(amOrPm === 'AM'){
       if ( Number(HourTime) === 12){
        HourTime = '00';
       }
       return newTime = HourTime + minutes;
    } else if(amOrPm === 'PM'){
        if (Number(HourTime) === 12) return newTime = HourTime + minutes;
        timePm = (Number(HourTime) + 12);
        return newTime = timePm + minutes;

    }

}

console.log(timeConversion(`12:05:20PM`));