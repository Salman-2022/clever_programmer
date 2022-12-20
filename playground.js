//baby weather 
let weather = prompt('how is the weather')

if (weather == 'rain') {
  console.log('bring your umbrella')
} else {
  console.log('Bring your sunglasses')
}


// tip calculator
let bill_amount = Number(prompt('bill Amount'))
let tip_percent = Number(prompt('what percent you want to tip'))
total_amount = bill_amount + (bill_amount*(tip_percent/100))
console.log('tip amount',total_amount-bill_amount)
console.log('total amount',total_amount)
