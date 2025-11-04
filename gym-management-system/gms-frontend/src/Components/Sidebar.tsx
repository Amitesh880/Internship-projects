import React,{useEffect, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link,useLocation,useNavigate} from 'react-router-dom'

export const Sidebar = ()=>{
    const navigate = useNavigate();
    
    const [greeting, setgreeting] = useState("");
    const location = useLocation();
    
    const GreetingMessage = ()=>{
        const currenttime = new Date().getHours();
        if(currenttime<12){
            setgreeting("Good Morning ");
        }
        else if(currenttime<18){
            setgreeting("Good Afternoon");
        }
        else if(currenttime<21){
            setgreeting("Good Evening");
        }else{
            setgreeting("Good Night");
        }
    }
    useEffect(()=>{
        GreetingMessage()
    },[])
    const handlelogout=async ()=>{
        sessionStorage.clear();
        navigate("/");
    }

     return <div className='p-5 border w-1/4 h-[100vh] bg-black text-white'>
        <div className='text-3xl font-extralight text-center'>
            Sholay
        </div>
        <div className='flex gap-5 my-6'>
            <div className='w-[100px] h-[100px] rounded-lg'>
                <img src="https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500" alt="" className='w-full h-full rounded-full' />
            </div>
            <div>
                <div className='text-2xl font-extralight'>
                    {greeting}
                </div>
                <div className='text-xl mt-1.5'>
                    Admin
                </div>
            </div>
        </div>
        <div className='border-t-2 py-10 mt-10 border-t-gray-700'>
            <Link to='/dashboard' className={`text-xl font-semibold gap-8 flex bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center hover:text-black ${location.pathname==='/dashboard'?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div className=""><HomeIcon/></div>
                <div className="">Dashboard</div>
            </Link>
            <Link to='/member' className={`text-xl mt-5 font-semibold gap-8 flex bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center hover:text-black ${location.pathname==='/member'?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div className=""><GroupIcon/></div>
                <div className="">Members</div>
            </Link>
            <div className='text-xl mt-5 font-semibold gap-8 flex bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center hover:text-black' onClick={()=>{handlelogout()}}>
                <div className=""><LogoutIcon/></div>
                <div className="">Log Out</div>
            </div>
        </div>
    </div>
}