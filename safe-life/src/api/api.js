import axios from 'axios';

const apiWithAuth = axios.create({
    baseURL: 'http://rest-api.brazilsouth.azurecontainer.io:8080',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    }
})
const apiWithoutAuth = axios.create({
    baseURL: 'http://rest-api.brazilsouth.azurecontainer.io:8080',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    }
})
const api = {apiWithAuth, apiWithoutAuth}
export default api