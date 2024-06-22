const formData = {
    email: "",
    message: ""
};

const inputForm = document.querySelector('.feedback-form');
const LocalName = 'feedback-form-state';

function dataInInput(clean = false) {
    for (let key in formData) {
        if (clean) {
            formData[key] = '';
        }
        const targetInput = inputForm.querySelector(`[name=${key}]`);
        if (targetInput !== null) {
            targetInput.value = formData[key];
        }
    }
}

function localInData() {
    if (localStorage.getItem(LocalName) !== null) {
        const localData = JSON.parse(localStorage.getItem(LocalName));
        for (let key in localData) {
            formData[key] = localData[key];
        }   
    }
}

inputForm.addEventListener('input', (evt) => {
    if (evt.target.name in formData) {
        formData[evt.target.name] = evt.target.value.trim();
    }
    localStorage.setItem(LocalName, JSON.stringify(formData));
});

inputForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let status = true;
    for (let key in formData) { 
        if (formData[key] == '') {
            status = false;  
        }
    }

    if (status == true) {
        console.log(formData);
        dataInInput(true);
        localStorage.removeItem(LocalName);
    } else {
        alert('Fill please all fields');
    }
});

localInData();
dataInInput();

