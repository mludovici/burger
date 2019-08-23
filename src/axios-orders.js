import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-hooks-4bdf9.firebaseio.com/',
});


export default instance;