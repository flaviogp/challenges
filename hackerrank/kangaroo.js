const x1 = 0  // 2 9998 - 10000 -1000
const v1 = 2
const x2 = 5
const v2 = 3


function kangaroo(x1, v1, x2, v2) {
    
    if (v1 <= v2) return console.log('NO')
    
    while (x1 <= x2) {
       x1 += v1
       x2 += v2
       if (x1 == x2) {
           return console.log('YES')
       } else if (x1 > x2) {
           return console.log('NO')
       }
    }   

}   

kangaroo(x1, v1, x2, v2);





























// function kangaroo(x1, v1, x2, v2) {
//     let positionKangaroo1 =  x1 + v1;
//     let positionKangaroo2 =  x2 + v2;
    
//     if(positionKangaroo1 === positionKangaroo2) return 'YES';
//     if(x1 <= x2 && v1 <= v2 || x2 <= x1 && v2 <= v1) return 'NO';
//     if(x1 > 10000 || x2 > 10000 || v1 > 10000 || v2 > 10000) return 'NO';

//     do{
//         positionKangaroo1 = positionKangaroo1 + v1
//         positionKangaroo2 = positionKangaroo2 + v2
//     }while(positionKangaroo1 !== positionKangaroo2)

//     return 'YES'


// }