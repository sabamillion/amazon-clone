import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-725bb/us-central1/api"
    baseURL: "https://api-mbepgtzapa-uc.a.run.app/",
});

export {axiosInstance };