const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');    
counterValue.value = 0;

decrementBtn.addEventListener('click', () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
    console.log(decrementBtn);
});

incrementBtn.addEventListener('click', () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
    console.log(incrementBtn);
});

console.log(counterValue);