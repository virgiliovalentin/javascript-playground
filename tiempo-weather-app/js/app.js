const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateCity = async (city) => {
    const cityDetail = await getCity(city);
    const cityWeather = await getCurrentWeather(cityDetail.Key);

    //both key and value have same name, thus we can use object shorthand notation
    return {cityDetail, cityWeather};
};

const updateUI = (data) => {
    const cityInfo = data.cityDetail;
    const weather = data.cityWeather;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    `;

    //update the night/day and weather icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }
    else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    //remove d-none class if present in card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

cityForm.addEventListener('submit', e => {
    //prevent default action when submitting form
    e.preventDefault();

    //get city input value
    const cityName = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with city input
    updateCity(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    //save city name in local storage
    localStorage.setItem('cityName', cityName);
});

//if city name is saved in local storage, then immediately query the weather for that city
if(localStorage.getItem('cityName')){
    updateCity(localStorage.getItem('cityName'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}