const dogImage = document.getElementById('dogImages')
const refresh = document.getElementById('refresh')
const name = document.getElementById('display')
const displayData = document.getElementById('card')
const search = document.getElementById('search')
const input = document.getElementById('name')


const BASE_URL = `https://www.superheroapi.com/api.php/10223569763528853`
// ${BASE_URL}/${id}

const card = (arr) => {
  const data = (`combat ⚔️: ${arr.combat} <br> 
  durability 🏋️‍♂️: ${arr.durability} <br>
  intelligence 🧠: ${arr.intelligence}<br>
  power 📊: ${arr.power}<br>
  speed ⚡: ${arr.speed}<br>
  strength 💪: ${arr.strength}` )
  
    displayData.innerHTML=data
}

const getARandom = () => {
  id=(Math.ceil(Math.random()*731)+1)
  
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    const info = json.powerstats
    arr = {...(json.powerstats)}

    dogImage.innerHTML = `<img src='${json.image.url}'
    height=300px />`
    display.innerHTML = (json.name)
    card(arr)
  })
}

const searchByName=()=>{
  val = input.value
  fetch(`${BASE_URL}/search/${val}`)
  .then(response => response.json())
  .then(json=>{
    arr = {...((json.results[0]).powerstats)}
    dogImage.innerHTML = `<img src='${(json.results[0]).image.url}'
    height=300px />`
    display.innerHTML = ((json.results[0]).name)
    card(arr)
  })
}


getARandom()

refresh.onclick = (id) => getARandom()

search.onclick=()=>{
  console.log(input.value)
  searchByName(input.value)
 }
