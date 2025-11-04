import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

type ModalProps={
    handleClose:()=>void
    content: React.ReactNode
    header:string
}

export const Modal:React.FC<ModalProps> = ({handleClose,content,header})=>{
    return <div className='w-full h-[100vh] fixed bg-black/50 text-black top-0 left-0 flex justify-center'>
        <div className='w-1/2 bg-white rounded-lg h-fit mt-32 p-5'>
            <div className='flex justify-between'>
                <div className='text-3xl font-semibold '>{header}</div>
                <div onClick={()=>{handleClose()}}>
                    <CloseIcon sx={{fontSize:"32px"}}/>
                </div>
            </div>
            <div className='mt-10 '>
                {content}
            </div>
        </div>
    </div>
}