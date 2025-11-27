import axios from 'axios'
import {useNavigate} from "react-router-dom";
// import {getAccessToken, setAccessToken} from "./authStore";
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})
export default axiosClient