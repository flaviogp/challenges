const x = 1;
const y = 3;
const z = 2;



function catAndMouse(x, y, z) {
    let posCatA = 0
    let posCatB = 0

    posCatA = Math.abs(x - z);
    posCatB = Math.abs(y - z);

    if(posCatA < posCatB) return 'Cat A'
    if(posCatA > posCatB) return 'Cat B'
    if(posCatA === posCatB) return 'Mouse C'

}

catAndMouse(x, y, z);