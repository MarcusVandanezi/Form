const username = document.getElementById('input-name')
const lastName = document.getElementById('input-lastname')
const birth = document.getElementById('input-birth')
const adress = document.getElementById('input-adress')
const city = document.getElementById('input-city')
const country = document.getElementById('input-country')
const phone = document.getElementById('input-phone')
const email = document.getElementById('input-email')
const coment = document.getElementById('input-coment')
const button = document.getElementById('submit-btn');
const radioMasc = document.getElementById('masc');
const radioFem = document.getElementById('fem');
const radioOth = document.getElementById('other');
const nameError = document.getElementById('name-error')
const lastnameError = document.getElementById('lastname-error')
const adressError = document.getElementById('adress-error')
const cityError = document.getElementById('city-error')
const countryError = document.getElementById('country-error')
const numberError = document.getElementById('number-error')
const emailError = document.getElementById('email-error')
const modalDiv = document.getElementById('modal')

// console.log("radio1",radioMasc.checked);
// console.log("radio2",radioFem.checked);
// console.log("radio3",radioOth.checked);
// radio lógica de checked, fazer um for ou varios if

function setLocalStorage () {
    localStorage.setItem('usernameKey', username.value)
    localStorage.setItem('lastNameKey', lastName.value)
    localStorage.setItem('birthKey', birth.value)
    localStorage.setItem('adressKey', adress.value)
    localStorage.setItem('cityKey', city.value)
    localStorage.setItem('countryKey', country.value)
    localStorage.setItem('phoneKey', phone.value)
    localStorage.setItem('emailKey', email.value)
    localStorage.setItem('comentKey', coment.value)
}; 

function baseRegex() {
    let isValid = true;
    const baseRegex = /^[a-zA-Z. ]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex = /^[0-9]{11,11}$/
    const adressRegex = /^[a-zA-Z,0-9. ]{2,}$/;

    if (!baseRegex.test(username.value)) {
        nameError.style.display = "block"; 
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    if (!baseRegex.test(lastName.value)) {
        lastnameError.style.display = "block";
        isValid = false;
    } else {
        lastnameError.style.display = "none";
    }

    if (!baseRegex.test(city.value)) {
        cityError.style.display = "block";
        isValid = false;
    } else {
        cityError.style.display = "none";
    }

    if (!baseRegex.test(country.value)) {
        countryError.style.display = "block";
        isValid = false;

    } else {
        countryError.style.display = "none";
    }

    if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
        isValid = false;

    } else {
       emailError.style.display = "none";
    }

    if (!numberRegex.test(phone.value)) {
        numberError.style.display = "block";
        isValid = false;

    } else {
        numberError.style.display = "none";
    }

    if (!adressRegex.test(adress.value)) {
        adressError.style.display = "block";
        isValid = false;

    } else {
        adressError.style.display = "none";
    }
    return isValid;
}
function modal () {
    let validModal = true;
    modalDiv.style.display = 'block';
}
function regexValidation() {
    if (!baseRegex()) { 
        alert('Campos inválidos');
    } else {
        setLocalStorage();
        modal();
    }
}

button.addEventListener('click', regexValidation);

window.onload = function getStorageData() {
    const usernameData = localStorage.getItem('usernameKey')
    const lastNameData = localStorage.getItem('lastNameKey')
    const birthData = localStorage.getItem('birthKey')
    const adressData = localStorage.getItem('adressKey')
    const cityData = localStorage.getItem('cityKey')
    const countryData = localStorage.getItem('countryKey')
    const phoneData = localStorage.getItem('phoneKey')
    const emailData = localStorage.getItem('emailKey')
    const comentData = localStorage.getItem('comentKey')
    username.value = usernameData;
    lastName.value = lastNameData;
    birth.value = birthData;
    adress.value = adressData;
    city.value = cityData;
    country.value = countryData;
    phone.value = phoneData;
    email.value = emailData;
    coment.value = comentData;
};