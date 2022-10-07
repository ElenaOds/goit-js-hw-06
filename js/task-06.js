const textInput = document.querySelector('#validation-input');
const lengthValue = document.querySelector('input');

textInput.addEventListener('blur', outTextInputFocus);

function outTextInputFocus(event) {
    textInput.classList.remove('invalid');
    textInput.classList.remove('valid');
    if ( event.currentTarget.value.length === + lengthValue.dataset.length) {
        textInput.classList.add('valid');
    }
     else {
        textInput.classList.add('invalid');
    };
    return textInput;
}