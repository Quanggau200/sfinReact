import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

export default function Payroll()
{

    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Payroll']);
    },[])
    return (
        <div></div>
    )
}