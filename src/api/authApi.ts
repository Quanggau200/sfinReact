import axiosClient from "./axiostClient.js";
import type {RegisterFormValues,LoginFormValue} from "../hooks/validateForm";

const authApi= {
    register:(data :RegisterFormValues)=>{
        const url='sfinvietnam/auth/register-new-user';
        return axiosClient.post(url,data)
    },
    login:(data:LoginFormValue)=>{
        const url='sfinvietnam/auth/login';
        return axiosClient.post(url,data)
    },
    get_user: ()=>{
        const url='sfinvietnam/auth/get-user';
        return axiosClient.get(url)
    }
}
export default authApi;