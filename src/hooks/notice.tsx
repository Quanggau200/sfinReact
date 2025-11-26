import {toast} from "react-toastify";
export function useNotice()
{
    return{
        success:(msg:string)=>toast.success(msg),
        checkerror:(msg:string)=>toast.error(msg),
        warning:(msg:string)=>toast.warning(msg)
    }
}