import React,{useState,useEffect,useRef} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from 'react-router-dom'

export const Dashboard = () => {

    const [accordiandashboard,setaccordiandashboard] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const checkifclickedoutside = (e:MouseEvent)=>{
            if(accordiandashboard && ref.current && !ref.current.contains(e.target as Node)){
                setaccordiandashboard(false)
            }
        }
        document.addEventListener("mousedown",checkifclickedoutside)
        return ()=>{
            document.removeEventListener("mousedown",checkifclickedoutside)
        }
    },[accordiandashboard])
    const handleOnclickMenu=(value:string)=>{
        sessionStorage.setItem('func',value)
    }

    return <div className='w-3/4 text-black p-5 relative'>
        <div className='w-full bg-slate-500 text-white rounded-lg flex p-3 justify-between items-center'>
            <div>
                <MenuIcon sx={{cursor:"pointer"}} onClick={()=>{setaccordiandashboard(prev=>!prev)}}/>
            </div>

            {accordiandashboard && <div ref={ref} className='absolute mt-30 p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight'>
                <div>
                    Hi, Welcome to gym management system
                </div>
                <div>
                    Feel free to ask any Queris
                </div>

            </div>}

            <div>
                <img className='w-8 h-8 rounded-3xl border-2' src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt="" />
            </div>
        </div>
        <div className='mt-5 pt-3 bg-slate-50/50 grid grid-cols-3 gap-5 w-full pb-5 overflow-x-auto h-[80%]'>
        
            <Link to={'/member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <PeopleAltIcon sx={{ fontSize: "50px", color: 'green' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Joined Members</div>
                </div>
            </Link>
            <Link to='/specific/monthly' onClick={()=>{handleOnclickMenu("MonthlyJoined")}} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <SignalCellularAltIcon sx={{ fontSize: "50px", color: 'violet' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Monthly Joined</div>
                </div>
            </Link>
            <Link to='/specific/expire-within-3-days' onClick={()=>{handleOnclickMenu("ThreedayExpire")}} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <AccessAlarmIcon sx={{ fontSize: "50px", color: 'red' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Expiring within 3 days</div>
                </div>
            </Link>
            <Link to='/specific/expire-with-4-7-days' onClick={()=>{handleOnclickMenu("FourtosevendaysExpired")}} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <AccessAlarmIcon sx={{ fontSize: "50px", color: 'red' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Expiring within 4-7 days</div>
                </div>
            </Link>
            <Link to='/specific/expired'  onClick={()=>{handleOnclickMenu("Expired")}} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <AccessAlarmIcon sx={{ fontSize: "50px", color: 'red' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Expired</div>
                </div>
            </Link>
            <Link to='/specific/inactive-members'  onClick={()=>{handleOnclickMenu("Inactive")}} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

                </div>
                <div className='py-7 px-5 flex-col justify-center text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                    <ReportIcon sx={{ fontSize: "50px", color: 'brown' }} />
                    <div className='text-xl my-3 font-semibold font-mono'>Inactive Members</div>
                </div>
            </Link>
        </div>

        <div className='md:bottom-4 p-4 w-3/4 mb-4 md:md-0 absolute bg-black text-white mt-20 rounded-xl text-xl'>
        Contact Developer for any Technical error at +918747856486
        </div>

    </div>
}