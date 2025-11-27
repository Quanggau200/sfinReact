import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function DashBoard()
{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Dashboard']);
    },[])
    return (
        <div>DashBoard works !</div>
    )
}