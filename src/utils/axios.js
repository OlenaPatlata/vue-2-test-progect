import axios from "axios";
const axiosInstans = axios.create({baseURL: 'https://apt-booking-api.herokuapp.com/',})

export default axiosInstans