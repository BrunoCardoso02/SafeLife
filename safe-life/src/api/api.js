import axios from 'axios';


const api = axios.create({
    baseURL: 'http://rest-api.brazilsouth.azurecontainer.io:8080',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

export default api