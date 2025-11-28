import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import authApi from "../api/authApi";
import React from "react";

// định nghĩa bảng user có những gì
interface User{
    id:string;
    username: string;
    email: string;
    phone?: string;
}
// định nghĩa hàm trả về
interface  UserContextType{
    user:User | null;
    setUser:React.Dispatch<React.SetStateAction<User| null>>;
    loading: boolean;
    fetchUser:() => Promise<void>;
}
const UserContext=createContext<UserContextType|undefined>(undefined);
export const UserProvider =({children}:{children:ReactNode}) => {
    const [user,setUser]=useState<User|null>(null);
    const [loading,setLoading]=useState(true);
    const fetchUser=async()=>{
        try{
            const reponse=await authApi.get_user();
            if(reponse.data)
            {
                setUser(reponse.data.data);
            }
        }
        catch(err){
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchUser();
    },[]);
    return (
        <UserContext.Provider value={{ user, setUser, loading,fetchUser }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser=():UserContextType=>{
    const context=useContext(UserContext);
    if(!context){
        throw new Error("useUser must be used within the context");
    }
    return context;
}
