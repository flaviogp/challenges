function swap(pos1, pos2, q) {
    const tmp1 = q[pos1];
    q[pos1] = q[pos2];
    q[pos2] = tmp1;
}

function bribe(num, bribes) {
    bribes[num] = (bribes[num] || 0) + 1;
}

function minimumBribes(q) {
    let swapped = true;
    let bribes = {};
    while (swapped) {
        swapped = false;
        for (let i = 1; i < q.length; i++) {
            if (q[i-1] > q[i]) {
                swap(i-1, i, q);
                swapped = true;
                bribe(q[i], bribes);
            }   
        }
    }
    const { sum, chaotic } = Object.keys(bribes).reduce((prev, key) => ({
        sum: prev.sum + bribes[key],
        chaotic: prev.chaotic || bribes[key] > 2
    }), { sum: 0, chaotic: false });
    
    console.log(chaotic ? "Too chaotic" : sum);
}

minimumBribes([4, 1, 2, 3]);