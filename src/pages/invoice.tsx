import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function Invoice()
{

    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Invoice']);
    },[])
    return (
        <div></div>
    )
}