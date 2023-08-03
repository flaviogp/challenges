function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const posApple = apples.map(apple => apple + a);
    const posOrange = oranges.map(orange => orange + b);

    const countAplle= posApple.filter(apple =>{
        return apple >= s && apple <= t;
    });
    const countOrange= posOrange.filter(orange =>{
        return orange >= s && orange <= t;
    });

    console.log(countAplle.length);
    console.log(countOrange.length);
}



countApplesAndOranges(7, 10, 4, 12, [3,3,3,4,10], [-1]);
// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);