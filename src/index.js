
const buttons = document.querySelectorAll('button')

const mainColor = (({target:{dataset:{flexDerection}, parentNode:{lastElementChild}}}) => {
    lastElementChild.style.flexDirection = flexDerection
    
     }) 

buttons.forEach((el) => {
    el.addEventListener('click', mainColor)
})