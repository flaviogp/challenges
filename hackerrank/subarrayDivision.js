
const s = [1,2,1,3,2];
const d = 3;
const m = 2;


function birthday(s, d, m) {
    let pieces = 0;

    while(s.length >= m){
        let acc = 0
        for(let i = 0; i < m; i++){
            acc+=s[i]
         }

         if(acc === d) pieces++
         s.shift()
    }
   return pieces
}

console.log(birthday(s, d, m));