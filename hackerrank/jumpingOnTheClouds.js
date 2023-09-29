
const c = [0, 0, 1, 0, 0, 1, 1, 0];
const k = 2;

function jumpingOnClouds(c, k) {
    let i = 0;
    let energy = 100;
    do {
        if (c[i] == 1) {
            energy -= 2;
        }

        i = (i + k) % c.length;
        energy--;
    } while (i !== 0);

    return energy;
}

console.log(jumpingOnClouds(c,k))