const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
const word = 'abc'


function designerPdfViewer(h, word) {
    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    const splitWord = word.split('')
    let BiggestLetter = 0;

    for(let i = 0; i < splitWord.length; i++){
        const indexLetter = letters.indexOf(splitWord[i]);
        BiggestLetter = BiggestLetter < h[indexLetter] ? h[indexLetter] : BiggestLetter
    }

    const result = BiggestLetter * (splitWord.length)
    return result

}


console.log(designerPdfViewer(h, word))