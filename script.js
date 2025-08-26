// const { createElement } = require("react")
const text = document.querySelector(".text")
const amount = document.querySelector("#amount")
const showExpence = document.querySelector('.list')
const addTransaction =document.querySelector('.btn')
addTransaction.addEventListener('click', function(){
    // prompt('doing great')    
    const li = document.createElement('li')
    li.classList.add = 'createdElement'
    li.textContent= `${text.value} ${amount.value} `
    showExpence.appendChild(li)
    
})