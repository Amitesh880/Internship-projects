import React,{useState,useEffect} from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MemberCard } from '../Components/MemberCard';
import { Modal } from '../Components/Modal';
import { Addmembership } from '../Components/Addmembership';
import {Addmember} from '../Components/Addmember'

export const Member = () => {
    const [addmembership, setaddmembership] = useState(false);
    const [addmember,setaddmember] =useState(false);

    const [currentpage,setcurrentpage] = useState(1);
    const [startfrom, setstartfrom] = useState(0);
    const [endto, setendto] = useState(9);
    const [totalData, settotalData] = useState(0);
    const [limit,setlimit] = useState(9);

    const [noofpage, setnoofpage] =useState(0);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        let totalData =54;
        settotalData(totalData);

        let extrapage = totalData % limit===0?0:1;
        let totalpage =(totalData / limit)+extrapage;
        setnoofpage(totalpage);

        if(totalData===0){
            setstartfrom(-1);
            setendto(0);
        }else if(totalData<9){
            setendto(totalData);
        }
    }

    const handlemembership = ()=>{
        setaddmembership(prev=>!prev);
    }
    const handlemember = ()=>{
        setaddmember(prev=>!prev);
    }
    const handleprev=()=>{
        if(currentpage!==1){
            let currpage = currentpage-1;
            setcurrentpage(currpage);
            var from = (currpage-1)*9;
            var to = (currpage*9);
            setstartfrom(from);
            setendto(to);
        }
    }
    const handlenext=()=>{
        if(currentpage!==noofpage){
            let currpage = currentpage+1;
            setcurrentpage(currpage);
            var from = (currpage-1)*9;
            var to = (currpage*9);
            if(to>totalData){
                to=totalData;
            }
            setstartfrom(from);
            setendto(to);
        }
    }

    return <div className='w-3/4 p-5 text-black h-[100vh]'>
        {/* blog for banner  */}
        <div className='border-2 flex justify-between w-full bg-slate-900 text-white rounded-lg p-3'>
            <div className='border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ' onClick={()=>{handlemember()}}>
                Add Member <FitnessCenterIcon />
            </div>
            <div className='border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ' onClick={()=>{
                handlemembership()}}>
                Membership <AddIcon />
            </div>
        </div>
        {/* block for back to dashboard button */}
        <Link to={'/dashboard'}><ArrowBackIcon /> Dashboard</Link>

        <div className='mt-5 w-1/2 flex gap-2'>
            <input type="text" className='border-2 w-full p-2 rounded-lg ' placeholder='Serach by Name or Mobile Number' />
            <div className='bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <SearchIcon />
            </div>
        </div>
        <div className='mt-5 text-xl flex justify-between text-slate-900'>
            <div>Total Members</div>
            <div className='flex gap-5 '>
                <div>{startfrom+1}-{endto} of {totalData} Members</div>
                <div className={`w-8 h-8 border-2 cursor-pointer flex justify-center items-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${currentpage==1?'bg-gray-200 text-gray-400':'null'}`} onClick={()=>{handleprev()}}><ChevronLeftIcon/></div>
                <div className={`w-8 h-8 border-2 cursor-pointer flex justify-center items-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ${currentpage==noofpage?'bg-gray-200 text-gray-400':'null'}`} onClick={()=>{handlenext()}}><ChevronRightIcon/></div>
            </div>
        </div>


        <div className='bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-3 overflow-x-auto h-[65%]'>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
          <MemberCard/>
        </div>
        {addmembership && <Modal header='Add Membership' handleClose={handlemembership} content={<Addmembership/>}/>}
        {addmember && <Modal header='Add New Member' handleClose={handlemember} content={<Addmember/>}/>}
    </div>
}