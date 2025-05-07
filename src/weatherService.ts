import axios from 'axios'

const apiKey= 'ca0d8d6c7a6641d9495bec3a5239cb93';
const baseUrl= 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = (city : string)=>
    axios.get(`${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`);

export const fetchForecast = (city : string)=>
    axios.get( `${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`);