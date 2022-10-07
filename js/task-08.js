const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const {
        elements: { email, password },
    } = event.currentTarget;

    event.preventDefault();

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled in!');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
    }
    event.currentTarget.reset();
}
