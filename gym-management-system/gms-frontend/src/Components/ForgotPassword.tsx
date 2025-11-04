import React, { useState } from 'react'

export const ForgotPassword =()=>{
    const [emailSubmit, setemailSubmit] = useState(false);
    const [otpvalidate , setotpvalidate] = useState(false);
    const [contentvalue,setcontentvalue]=useState("Submit Email ID");
    const [inputfield, setinputfield] = useState({"Email":"","otp":"","newPassword":""})

    const handleSubmit= ()=>{
        if(!emailSubmit){
            setemailSubmit(true);
            setcontentvalue("Submit OTP");
        }else if(emailSubmit && !otpvalidate){
            setotpvalidate(true);
            setcontentvalue("Save Password");
        }
    }

    const handleOnchange =(event:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setinputfield({...inputfield,[name]:event.target.value})
    }
    console.log(inputfield)

   return <div className='w-full'>
            <div className='w-full mb-5'>
                <div>Enter Your Email</div>
                <input type="email" value={inputfield.Email} onChange={(event)=>{handleOnchange(event,"Email")}} placeholder='Enter Email' className='w-1/2  bg-slate-50 rounded-lg text-lg font-semibold border-2 border-slate-400' />
            </div>
           {emailSubmit &&  <div className='w-full mb-5'>
                <div>Enter Your OTP</div>
                <input type="text" value={inputfield.otp} onChange={(event)=>{handleOnchange(event,"otp")}} placeholder='Enter OTP' className='w-1/2  bg-slate-50 rounded-lg text-lg font-semibold border-2 border-slate-400' />
            </div>}
           {otpvalidate &&  <div className='w-full mb-5'>
                <div>Enter Your New Password</div>
                <input type="password" value={inputfield.newPassword} onChange={(event)=>{handleOnchange(event,"newPassword")}} placeholder='Enter New Password' className='w-1/2  bg-slate-50 rounded-lg text-lg font-semibold border-2 border-slate-400' />
            </div>}
            <div className='p-2  w-2/3 m-3 flex mx-auto'>
            <button type="button" className="w-full text-lg font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200  hover:text-blue-700 cursor-pointer" onClick={()=>handleSubmit()}>{contentvalue}</button>
        </div>
        </div>
}