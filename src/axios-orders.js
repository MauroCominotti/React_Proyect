import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-60223.firebaseio.com/'
});

export default instance;