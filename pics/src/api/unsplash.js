import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P3sKml1av31yDo4bPpjkKvQjGIpaRmlIBcMtuimKF3w'
    }
});