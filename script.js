const username = document.getElementById('input-name')
const lastName = document.getElementById('input-lastname')
const birth = document.getElementById('input-birth')
const adress = document.getElementById('input-adress')
const city = document.getElementById('input-city')
const country = document.getElementById('input-country')
const phone = document.getElementById('input-phone')
const email = document.getElementById('input-email')
const coment = document.getElementById('input-coment')
// console.log(username);
// console.log(lastName);
// console.log(birth);
// console.log(adress);
// console.log(city);
// console.log(country);
// console.log(phone);
// console.log(email);
// console.log(coment);

const button = document.getElementById('submit-btn');




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
