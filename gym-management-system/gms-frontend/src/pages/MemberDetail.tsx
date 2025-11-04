import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Switch from 'react-switch'

export const MemberDetail = () => {

    const [isChecked, setIsChecked] = useState("Active");
    const [renew, setrenew] = useState(false);
    const navigate = useNavigate();
    const handlechecked = () => {
        let curr = isChecked === "Active" ? "Pending" : "Active"
        setIsChecked(curr);
    }
    return <div className='w-3/4 text-black p-5'>
        <div className='w-fit text-white bg-black rounded-2xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center p-2 cursor-pointer' onClick={() => { navigate(-1) }}>
            <ArrowBackIcon /> Go Back
        </div>
        <div className='mt-10 p-2 '>
            <div className='w-[100%] h-fit flex'>
                <div className='w-1/3 mx-auto'>
                    <img src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F1oIrMoqckYTE96ekt5ECyT%2F51471e1e09c39541c1564bc164bd9b06%2Fdesktop-how-often-to-go-to-the-gym.jpg&w=3840&q=85" alt="" className='w-full mx-auto' />
                </div>
                <div className='w-2/3 mt-5 text-xl p-5'>
                    <div className='mt-1 mb-2 text-2xl font-semibold'>Name:Reema</div>
                    <div className='mt-1 mb-2 text-2xl font-semibold'>Phone No. :785554865</div>
                    <div className='mt-1 mb-2 text-2xl font-semibold'>Address:27 street Ghaziabad</div>
                    <div className='mt-1 mb-2 text-2xl font-semibold'>Joined Date:10/11/2024</div>
                    <div className='mt-1 mb-2 text-2xl font-semibold'>Next Bill Date:10/11/2024</div>
                    <div className='mt-1 mb-2 flex gap-4 text-2xl font-semibold items-center'>Status: <Switch onColor="#6366F1" checked={isChecked === "Active"} onChange={() => { handlechecked() }} />
                    </div>
                    <div className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center w-full md:w-1/2 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white ${renew && isChecked === "Active" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : null}`} onClick={() => { setrenew(prev => !prev) }}>
                        Renew
                    </div>
                    {renew && isChecked=="Active"?(<div className='rounded-lg p-5 mt-5  mb-5 h-fit bg-slate-50 w-[100%]'>
                        <div className='my-5'>
                            <div>Membership</div>
                            <select className='w-full p-2 border-2 rounded-lg'>
                                <option value="">1 Month Plan</option>
                                <option value="">2 Month Plan</option>
                            </select>
                            <div className={`mt-3 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white`}>Save</div>
                        </div>
                    </div>):null}
                </div>
            </div>
        </div>
    </div>
}