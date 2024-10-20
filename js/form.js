const submitButton = document.getElementById('submit-button');
const loader = document.getElementById('loader');
const buttonText = document.getElementById('buttonText');
const problemSelect = document.getElementById('problem');
const ageSelect = document.getElementById('age');
const brandSelect = document.getElementById('brand');

const BASE_URL = 'https://stiralkinback-production.up.railway.app'

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitButton.disabled = true;
    loader.style.display = 'inline-block';
    buttonText.style.display = 'none';

    let brandValue = brandSelect.options[brandSelect.selectedIndex].value;
    let ageValue = ageSelect.options[ageSelect.selectedIndex].value;
    let problemValue = problemSelect.options[problemSelect.selectedIndex].value !== 'form-section' ? problemSelect.options[problemSelect.selectedIndex].value : undefined;

    let formData = new FormData(this);
    const object = Object.fromEntries(formData.entries());
    if (brandValue) object.brand = brandValue;
    if (ageValue) object.age = ageValue;
    if (problemValue) object.problem = problemValue;

    const jsonData = JSON.stringify(object);

    fetch(`${BASE_URL}/api/v1/mail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => {
            
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }

        return response.text();
    })
    .then(text => {
        this.reset();


        
        Swal.fire({
            icon: "success",
            title: "Ваша заявка успешно отправлена!",
            text: "С Вами свяжутся в ближайшее время",
            customClass: {
                title: 'my-title-style',
                content: 'my-content-style',
            },
            showCloseButton: true,
            showConfirmButton: false
        });

        ym(97505549, 'reachGoal', '336460081');

    })
    .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
        Swal.fire({
            icon: 'error',
            title: 'Упс...',
            text: 'Что-то пошло не так, повторите попытку позже',
            customClass: {
                title: 'my-title-style',
                content: 'my-content-style',
            },
            showCloseButton: true,
            showConfirmButton: false
        });
    })
    .finally(() => {
        submitButton.disabled = false;
        loader.style.display = 'none';
        buttonText.style.display = 'inline-block';
    })
});