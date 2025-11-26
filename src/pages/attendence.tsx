import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";
export default function Attendence()
{
    const {setTitle}=usePageTitle()
    useEffect(()=>{
        setTitle(['Attendence']);
    },[])
    return (
        <div>
            Cài đặt
        </div>
    )
}