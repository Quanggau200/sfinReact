import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function Employee()
{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Employee']);
    },[])
    return (
        <div>employee work</div>
    )
}