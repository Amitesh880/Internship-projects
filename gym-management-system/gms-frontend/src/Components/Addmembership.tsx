import React,{useState} from "react";


export const Addmembership =()=>{
    const [inputfield,setinputfield] = useState({Months:"",Price:""})

    const handleOnchange=(event:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        setinputfield({...inputfield,[name]:event?.target.value})
    }
    console.log(inputfield)

    return <div className="text-black">
        <div className="flex flex-wrap items-center justify-center gap-5">
            {/* block for membership detail */}
            <div className="text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-center pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div>{"1 Month Membership"}</div>
                <div>Rs 1000</div>
            </div>
            {/* block for membership detail */}
            <div className="text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-center pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div>{"2 Month Membership"}</div>
                <div>Rs 2000</div>
            </div>
        </div>
        <hr className="mt-10 mb-10"/>
        <div className="flex gap-10 mb-10">
            <input value={inputfield.Months} onChange={(event)=>{handleOnchange(event,"Months")}} className="border-2 rounded-lg w-1/3 h-1/2 text-lg p-2 " type="number" placeholder="Add No.of Months"/>
            <input value={inputfield.Price} onChange={(event)=>{handleOnchange(event,"Price")}} className="border-2 rounded-lg w-1/3 h-1/2 text-lg p-2 " type="number" placeholder="Add Price"/>
            <div className="text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Add +</div>
        </div>
    </div>
}