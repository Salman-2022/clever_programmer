//baby calculator
add = (num1,num2) => num1+num2;
let sub = (num1,num2) => num1-num2;

function divide(num1,num2){
  return num1/num2
}

function multiply(num1,num2){
  return num1*num2
}

num1 = Number(prompt('Enter the first number'))
num2 = Number(prompt('Enter 2nd number'))
action = prompt('Enter your action')

function calculator(num1,num2,action){
  switch (action){
      case 'add':
      console.log(add(num1,num2))
      break;
    case 'subtract':
      console.log(sub(num1,num2))
      break;
    case 'multiply':
      console.log(multiply(num1,num2))
      break;
    case 'divide':
      console.log(divide(num1,num2))
      break;
    default:
      console.log('invalid input')    
  }
}
calculator(num1,num2,action)
