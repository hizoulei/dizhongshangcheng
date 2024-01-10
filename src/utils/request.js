import axios from 'axios'
import { getToken } from './auto'
import { getConfig } from '../config/config'
const request = axios.create({
    baseURL: getConfig('baseUrl'),
    timeout: 10000,
})
request.interceptors.request.use((config => {
    if (getToken()) {
        config.headers['Authorization'] = 'Bearer ' + getToken() || ''
    }
    return config
}), (error) => {
    return Promise.reject(error)
});
export default request