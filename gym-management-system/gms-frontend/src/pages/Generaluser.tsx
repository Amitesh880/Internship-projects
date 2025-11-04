import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MemberCard } from "../Components/MemberCard";

export const Generaluser = () => {
    const [header, setheader] = useState("");
    useEffect(()=>{
        const func = sessionStorage.getItem('func');
        functioncall(func??"")
    },[])
    const functioncall = async (func:string)=>{
        switch(func){
            case "MonthlyJoined":
                setheader("Monthly Joined Members")
                break;
                
            case "ThreedayExpire":
                setheader("Expiring within 3 days Members")
                break;
            case "FourtosevendaysExpired":
                setheader("Expiring within 4-7 days Members")
                break;
            case "Expired":
                setheader("Expired Membrs")
                break;
            case "Inactive":
                setheader("Inactive Members")
                break;

        }
    }
    return <div className="w-3/4 p-5 text-black flex-col">
        <div  className="border-2 flex justify-between bg-slate-900 text-white rounded-lg p-3">
            <Link to='/dashboard' className="border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black"><ArrowBackIcon/>Back To Dashboard</Link>
        </div>
        <div className="mt-5 text-2xl text-slate-900">
            {header}
        </div>

        <div className="bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-3 overflow-x-auto h-[80%] gap-2">
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
        </div>
    </div>
}