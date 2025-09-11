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
// console.log(username);
// console.log(lastName);
// console.log(birth);
// console.log(adress);
// console.log(city);
// console.log(country);
// console.log(phone);
// console.log(email);
// console.log(coment);


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

button.addEventListener('click', setLocalStorage);

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

    // console.log(usernameData);
    // console.log(lastNameData);
    // console.log(birthData);
    // console.log(adressData);
    // console.log(cityData);
    // console.log(countryData);
    // console.log(phoneData);
    // console.log(emailData);
    // console.log(comentData);
    
};

