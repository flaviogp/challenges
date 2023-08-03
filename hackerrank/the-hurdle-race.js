const k = 1;
const height = [1,2,3,3,2]

function hurdleRace(k, height) {
    let potions = 0;

    height.sort((a,b)=> a - b);

    if(height[height.length-1] >= k) potions = height[height.length-1] - k;

    return potions;
}


console.log(hurdleRace(k, height))