import axios from 'axios';
const { VUE_APP_MY_KEY } = process.env;


const axiosInstans = axios.create({
  baseURL: 'https://airbnb13.p.rapidapi.com',
  // timeout: 1000,
  headers: {
    'X-RapidAPI-Key': VUE_APP_MY_KEY,
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
});

export default axiosInstans;

// https://airbnb13.p.rapidapi.com/search-location/?location=Paris&checkin=2022-12-24&checkout=2022-12-25&adults=1&children=0&infants=0&page=1