const data = document.getElementById('message')
phrase='Kya bolti public'
data.innerHTML=phrase
data.style.color='blue'
data.style.backgroundColor='yellow'

let redDiv =document.getElementById('red')
let blueDiv =document.getElementById('blue')
let greenDiv =document.getElementById('green')

let result = document.getElementById('result')
let response = document.getElementById('response')
const records = {
    red:0,
    blue:0,
    green:0
}


const messageToDisplay = (color) => {
    toDisplay = `you have chosen ${color}`
    return toDisplay
}
// const count = (records)=>{
//     const frequency = {}
//     for(const record of records){
//         if (record in frequency){
//             frequency[record]++
//         }else{
//             frequency[record]=1
//         }
//     }
//     return frequency
// }

redDiv.onclick = ()=> {
    records['red']++
    data.innerHTML=messageToDisplay('red')
}
blueDiv.onclick = ()=> {
    records['blue']++
    data.innerHTML=messageToDisplay('blue')
}
greenDiv.onclick = ()=> {
    records['green']++
    data.innerHTML=messageToDisplay('green')
}


result.onclick = ()=>{
    message = `red:${records.red}, blue:${records.blue}, green:${records.green}`
    response.innerHTML=message
}

