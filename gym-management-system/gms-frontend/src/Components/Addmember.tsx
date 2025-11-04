import React,{ChangeEvent, useState} from "react";

export const Addmember =()=>{
    const [inputfield,setinputfield] = useState({Name:"",Number:"",Address:"",membership:"",profilepic:"",joiningDate:""})

    const handleOnchange=(event:ChangeEvent<HTMLInputElement>,name:string)=>{
        setinputfield({...inputfield,[name]:event.target.value})
    }
    console.log(inputfield)

    return <div className="text-black ">
       <div className="grid grid-cols-2 text-lg">
        <input type="text" value={inputfield.Name} onChange={(event)=>{handleOnchange(event,"Name")}} className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 mt-2 border-slate-400 rounded-md h-12" placeholder="Name of the Joinee" />
        <input type="text" value={inputfield.Number} onChange={(event)=>{handleOnchange(event,"Number")}} className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 mt-2 border-slate-400 rounded-md h-12" placeholder="Mobile Number" />
        <input type="text" value={inputfield.Address} onChange={(event)=>{handleOnchange(event,"Address")}} className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 mt-2 border-slate-400 rounded-md h-12" placeholder="Enter Address" />
        <input type="date" value={inputfield.joiningDate} onChange={(event)=>{handleOnchange(event,"joiningDate")}} className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 mt-2 border-slate-400 rounded-md h-12" placeholder="Enter Date" />

        <select className="border-2 w-[90%] h-12 pt-2 pb-2 border-slate-500 rounded-md placeholder:text-gray">
            <option value="">1 Month Membership</option>
            <option value="">2 Month Membership</option>
        </select>
        <input type="file"/>
        <div className="w-1/4 rounded-full">
        <img src={"https://thumbs.dreamstime.com/b/gray-scale-male-character-profile-picture-blank-facial-features-vector-illustration-ideal-use-social-media-generic-335067529.jpg"} alt="" className="w-full h-full rounded-full" />
        </div>
        <div className="p-3 border-2 w-28 text-lg h-14 mx-auto bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Register</div>
       </div>
    </div>
}