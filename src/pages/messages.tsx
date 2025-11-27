import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function Messages()
{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Messages']);
    },[])
    return (
        <div></div>
    )
}