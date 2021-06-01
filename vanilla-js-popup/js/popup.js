//getting a reference of the DOM elements
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//listening to the events to display or close the popup
button.addEventListener('click', () => {
    popup.style.display = 'block';
});
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});