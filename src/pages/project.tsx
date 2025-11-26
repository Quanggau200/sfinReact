import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function  Project()
{

    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Project']);
    },[])
    return(
        <div></div>
    )
}