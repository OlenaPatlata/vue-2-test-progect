import axios from "../utils/axios";
// axios.defaults.baseURL='https://airbnb13.p.rapidapi.com/search-location';
// const API_KEY = '66bed59e2bmsh02fa274b712e18ep1b746fjsn6735c11e15ae';

const PARAM = {
  location: 'Paris',
  checkin: '2022-12-24',
  checkout: '2022-12-25',
  adults: '1',
  children: '0',
  infants: '0',
  page: '1'
}
export const getApartmentsList = async () => {
  const  {data} = await axios.get(`/search-location?location=${PARAM.location}&checkin=${PARAM.checkin}&checkout=${PARAM.checkout}&adults=${PARAM.adults}&children=${PARAM.children}&infants=${PARAM.infants}&page=1`);
  return data;
};
