import React from 'react';
import { Login } from '../../Components/Login';
import { Signup } from '../../Components/Signup';
const Home = () => {
    return <div className='w-full h-[100vh]'>
        <div className='border-2 border-b-slate-800 bg-slate-950 text-slate-50 font-semibold p-4 text-xl'>
            Welcome To Gym Mangement System
        </div>
        <div className='w-full h-[100%] bg-cover bg-[url("https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg")] flex justify-center '>
            <div className='w-full lg:flex gap-32'>
                <Login/>
                <Signup/> 

            </div>
        </div>
    </div>
}
export default Home;