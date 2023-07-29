const s = [
    [4, 9, 2],
    [9, 7, 6],
    [3, 5, 8]
]
// const s = [
//     [5,3,4],
//     [1,5,8],
//     [6,4,2]
// ]
// const s = [
//     [4,8,2], 
//     [4,5,7], 
//     [6,1,6]
// ]

function formingMagicSquare(s) {

    let cost = 0;
    let mincost = 9999999;
    const magicTemplate = [
    [ [ 8, 1, 6 ], [3, 5, 7 ], [ 4, 9, 2 ] ],
    [ [ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ] ],
    [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ] ],
    [ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ],
    [ [ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ],
    [ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ],
    [ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ],
    [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
    ];

    for (let i = 0; i < magicTemplate.length; i++) {
        for (let j = 0; j < magicTemplate[i].length; j++) {
            for (let k = 0; k < magicTemplate[j].length; k++) {
                    let t = magicTemplate[i][j][k] - s[j][k];
                cost += Math.abs(t);
            }
        }
        if (cost < mincost) mincost = cost;
        cost = 0;
    }
    return mincost;


}

console.log(formingMagicSquare(s));