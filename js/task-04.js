const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value")

let counterValue = 0;

incrementBtn.addEventListener('click', ()=>{
    counterValue++;
    value.innerHTML = counterValue;
})

decrementBtn.addEventListener('click', ()=>{
    counterValue--;
    value.innerHTML = counterValue;
})