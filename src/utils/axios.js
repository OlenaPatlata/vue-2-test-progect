import axios from 'axios';

const axiosInstans = axios.create({
  baseURL: 'https://airbnb13.p.rapidapi.com',
  // timeout: 1000,
  headers: {
    'X-RapidAPI-Key': '66bed59e2bmsh02fa274b712e18ep1b746fjsn6735c11e15ae',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
});

export default axiosInstans;

// https://airbnb13.p.rapidapi.com/search-location/?location=Paris&checkin=2022-12-24&checkout=2022-12-25&adults=1&children=0&infants=0&page=1