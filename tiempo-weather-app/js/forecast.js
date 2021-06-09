const weatherAPIKey = 'pOpUZ4xapufpUGDtjFf8UVKUJUGd7W6o ';

//get CityID 
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${weatherAPIKey}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

//get current conditions for city
const getCurrentWeather = async (cityID) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityID}?apikey=${weatherAPIKey}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

