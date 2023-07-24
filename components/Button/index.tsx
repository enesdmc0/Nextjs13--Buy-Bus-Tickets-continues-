"use client"
import React from 'react'
import { IconType } from 'react-icons';

interface Props {
    label: string;
    type: "button" | "submit" | "reset";
    icon?: IconType;
    onClick?: () => void;
    color?: string;
    width?: boolean;
}

const Button: React.FC<Props> = ({label, type, icon: Icon, onClick, color, width}) => {
  return (
    <button
    onClick={onClick}
        type={type}
        style={{backgroundColor: color}}
        className={` ${width && "w-full"} text-center inline-flex justify-center py-2 items-center gap-x-1.5
         rounded-md bg-indigo-600 px-2.5  text-sm
          font-semibold text-white shadow-sm
           hover:bg-indigo-500 focus-visible:outline
            focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-indigo-600`}
      >
        {Icon && <Icon className="-ml-0.5 h-5 w-5" aria-hidden="true" />}
        {label}
      </button>
  )
}

export default Button