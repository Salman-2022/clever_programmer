let phrase= 'hello world lol this is a sentence lol'
let frequency = {}
const countLetter = (phrase) => {
    for (const letter of phrase){
        if (letter in frequency){
            frequency[letter]++
        }else{
            frequency[letter] = 1
        }  
    }
    return frequency
}
// console.log(countLetter(phrase))

//word frequency

const countWord=(phrase)=>{
    array = phrase.split(' ')
    return countLetter(array)
    // for (const word of array){
    //     if(word in frequency){
    //         frequency[word]++
    //     }else{
    //         frequency[word]=1
    //     }
    // }
    // return frequency
}
console.log(countWord(phrase))
