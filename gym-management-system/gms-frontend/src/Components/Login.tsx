import React,{EventHandler, useState} from "react"
import { Modal } from "./Modal";
import { ForgotPassword } from "./ForgotPassword";
import { useNavigate } from "react-router-dom";

interface Login{
    type:string;
}
export const Login = () => {
    const navigate = useNavigate();
    const [forgetPassword, setforgetPassword] =useState(false);
    const [Loginfield, setLoginfield]= useState({"Username":"","Password":""})

    const handleClose=()=>{
        setforgetPassword(prev=>!prev)
    }
    const handleLogin =()=>{
        sessionStorage.setItem("isLogin","true");
        navigate('/dashboard');
    }
    const handleOnchange =(event: React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setLoginfield({...Loginfield,[name]:event.target.value})
    }
    console.log(Loginfield);

    return <div className='w-1/3 mt-20 ml-20 p-10  bg-sky-500/50 h-fit'>
        <div className=' font-sans text-white text-center text-3xl'>
            Login
        </div>
        <input value={Loginfield.Username} onChange={(event)=>{handleOnchange(event,"Username")}} type="text" placeholder='Enter Username' className='w-full my-10 bg-slate-50 rounded-lg text-lg font-semibold' />
        <input value={Loginfield.Password} onChange={(event)=>{handleOnchange(event,"Password")}} type="password" placeholder='Enter Password' className='w-full  bg-slate-50 rounded-lg text-lg font-semibold' />
        <div className='p-2  w-[80%] m-3 flex mx-auto'>
            <button type="button" onClick={()=>{handleLogin()}} className="w-full text-lg font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer">Login</button>
        </div>
        <div className='p-2 w-[80%] m-3 flex mx-auto'>
            <button type="button" className="w-full text-lg font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer" onClick={handleClose}>Forgot Password</button>
            {forgetPassword && <Modal handleClose={handleClose} header="Forgot password" content={<ForgotPassword/>}/>}
        </div>
    </div>
}