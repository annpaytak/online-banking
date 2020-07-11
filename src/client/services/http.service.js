import axios from 'axios'

class HttpService {
    constructor() {
        this.http =  axios.create({
            baseURL: 'http://localhost:3001'
        });
    }
}

export default HttpService;


