import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function Schedule()
{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Schedule']);
    },[])
    return (
        <div></div>
    )
}