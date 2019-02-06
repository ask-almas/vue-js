import axios from 'axios'

const instance = axios.create({
    baseURL: ''
});

// instance.defaults.headers.common['Something'] = 'something';

export default instance;
