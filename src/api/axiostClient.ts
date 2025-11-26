import axios from 'axios'
// import {getAccessToken, setAccessToken} from "./authStore";
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})
// axiosClient.interceptors.request.use(
//     (configs)=>
// {
//     const token = getAccessToken();
//     if (token) {
//         console.log(token);
//         configs.headers.Authorization = `Bearer ${token}`;
//     }
//     return configs;
//     },
//     (error) => Promise.reject(error)
// );
// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error)=>{
//         const originRequest=error.config;
//         if(error.response ?.status===401 && !originRequest._retry)
//         {
//             originRequest._retry = true;
//             try {
//                     const res=await axiosClient.post('/auth/login')
//                     const newAccessToken=res.data.data.token;
//                     setAccessToken(newAccessToken)
//                     originRequest.headers.Authorization=`Bearer ${newAccessToken}`
//                     return axiosClient(originRequest)
//             }
//             catch (refreshEroor)
//             {
//                 console.log("lỗi")
//                 setAccessToken(null)
//                 window.location.href = '/'
//                 return Promise.reject(refreshEroor)
//             }
//         }
//         return Promise.reject(error)
//     }
// );
export default axiosClient