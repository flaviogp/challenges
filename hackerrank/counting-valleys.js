
const steps = 1000;
const path = 'UUUUDUUDDDDDUUUDDUUDUDDDUUDUDUDDUDUDDUUUDDDUDDUDDDDDUUUDDUUDDDDDDDDDDDUUDDDDDDUUUUDUDUDDDDUDUDUUUDUDDDDUUDDDDDDDUUUUUUUDDUUUUUDUUUDUDUDDDDUUDDUDDDDDUDUDUDDDDUUDUDUDDUUDDDDDUDDUUUUDDDUUUDUUUUDUUDUDUDUUDUUDDDUDDUDDDDDDDUUDDUDDDDDUDUDDDUUDUDUDDUUUUUUDDUDDDDUDUDDDUDDDUUUUDDDDDDDUUDDDDUDUDUDDUUDDUUDUUDUUDDDUUUDDDDUDDDUDUDUDUUUDUDUDUDUUUUDDDUUDUUUUDUUDDUUDUDUDDUDDDDUUDDDDUDDUUUDUUDUDDDUUUDUUDDDUDUDUUDUUUUUDDDUUUUUDDDUUDDUDDDUUUUUUUUDDDUUDUDUUDUUDUDUUDDDDDUUUUDUDDUUUDUDDDDUUDUUUDUUUDDDDUUDDUUDUUUDDUDDUDDUDDUUDDDUDUUUUUUUDDDUDUDDUUUUUDDUDUDDDDDUDDDUDUDUDDDDDDDDUUDDUDUUUUDUUUDUUDDUUUDDDUUDUUDDUDUDDUUUUUUUDDUDDUDUDDDUUDUUUDDUUDDDDUUUUUDDUUDDDUUUDDDUUDDDDDUDUUUDDUDUDDUDDUUDDDDDUUUUDUDUUUUUUDUUDUUUDDUUUUUUDDDDUDUDUUDUDDDUUDDDUUUUUDDDDDUDUDDDDDUUDDDUDUUUDDDUUUUDDUUUUUUUDUDDUUDDUDDDDDDDDDDDUDUDUUDDDDUDUUUDUDUUDUUUDDDDDUUDUDUUUDDUDUUUUDDUUDDUDDUDUUUDDUDUUDUDUUDDDDDDUUDUDDDUUUUDDDDUUUUUDDUUUDUUDUUDUUUDDUDDUDDUDUUUDDUDDDDDDDUUDDUUDUUDUUDUDUUDDUUDUDUUUUDUUDDDDUUDDUUDUUUDDUUUDUDDUUUUUUUUUUUUUUUUUUUUUUUUU'

function countingValleys(steps, path) {

    let seaLevel = 0
    let valeyCount = 0    
    let valey = false
    for(let el of path){
        switch(el){
            case 'U':
                seaLevel += 1                
                break
            case 'D':
                seaLevel -= 1
                break
        }
        if(seaLevel < 0) valey = true
        if(seaLevel === 0 && valey) {
            valeyCount++
            valey = false
        }
    }
    return valeyCount
}

console.log(countingValleys(steps, path))