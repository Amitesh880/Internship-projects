import React from "react";
import { useState } from "react";

import '../assets/Signup.css'

export const Signup = () => {
    const [inputfield,setinputfield] = useState({"Email":"","Username":"","Password":"","profilepic":"https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"})

    const handleOnchange=(event: React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setinputfield({...inputfield,[name]:event.target.value})
    }
 console.log(inputfield);

    return <div className='customSignup w-1/3 mt-20 ml-20 p-10  bg-sky-500/50 h-[450px] overflow-y-auto'>
        <div className=' font-sans text-white text-center text-3xl'>
            Register Your Gym
        </div>
        <input type="email" value={inputfield.Email} onChange={(event)=>{handleOnchange(event,"Email")}} placeholder='Enter Email' className='w-full my-10 bg-slate-50 rounded-lg text-lg font-semibold' />
        <input type="text" value={inputfield.Username} onChange={(event)=>{handleOnchange(event,"Username")}}  placeholder='Enter UserName' className='w-full mb-10 bg-slate-50 rounded-lg text-lg font-semibold' />
        <input type="password" value={inputfield.Password} onChange={(event)=>{handleOnchange(event,"Password")}}  placeholder='Enter Password' className='w-full mb-10  bg-slate-50 rounded-lg text-lg font-semibold' />
        <input type="file" className='w-full mb-10 bg-slate-100 rounded-lg text-lg font-semibold' />
        <img src={inputfield.profilepic} alt="" className='h-[200px] w-[250px] mb-10 ' />
        <div className='p-2 w-[80%] m-3 flex mx-auto'>
            <button type="button" className="w-full text-lg font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer">Register</button>
        </div>

    </div>
}