import React from 'react'
import { FaBus } from 'react-icons/fa';
import {IoMdBusiness} from "react-icons/io"
interface Props {
    title: string;
    description: string
}

const Success: React.FC<Props> = ({title, description}) => {
  return (
    <div className='items-center justify-center m-10 p-10 flex flex-col gap-5'>
       <div className='flex items-center gap-5'>
       <FaBus size={100} className='mx-auto text-green-500'/>
        <IoMdBusiness size={100} className='mx-auto text-green-500'/>
       </div>
        <h1 className='text-white font-bold text-5xl'>{title}</h1>
        <p className='text-white font-bold text-xl '>{description}</p>
    </div>
  )
}

export default Success