import React from 'react'
import {Link} from 'react-router-dom'
import CircleIcon from '@mui/icons-material/Circle';


export const MemberCard=()=>{
    return   <Link to='/member/id' className='bg-white m-1 rounded-lg p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white cursor-pointer'>
                <div className='w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full'>
                    <img className='w-full h-full rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMh9WB1Z0VE7DcLwf-x4OcdMrHw_2JuwhrA&s" alt="Profile pic" />
                    <CircleIcon className='absolute top-0 left-0' sx={{color:"greenyellow"}}/>
                </div>
                <div className='mx-auto mt-5 text-center text-xl font-semibold font-mono'>
                    {"Sambhavi"}
                </div>
                <div className='mx-auto  text-center text-xl mt-2 font-mono'>
                    {"+91"+"8654637282"}
                </div>
                <div className='mx-auto  text-center text-xl mt-2 font-mono'>
                    Next Bill Date: {"31-12-2025"}
                </div>
            </Link>
}