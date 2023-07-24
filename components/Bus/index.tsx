"use client"
import React, {useState} from 'react';
import {PiArmchairFill} from "react-icons/pi";
import {User} from "@prisma/client";
import {useAtom} from "jotai";
import {totalPriceAtom} from "@/atom/GlobalAtom";
import { AiOutlineRight } from 'react-icons/ai';
import { toast } from 'react-toastify';

const chair = [
    {no: "A1", gender: "man"},
    {no: "A2", gender: "man"},
    {no: "A3", gender: "man"},
    {no: "A4", gender: "man"},
    {no: "A5", gender: ""},
    {no: "A6", gender: "man"},
    {no: "A7", gender: ""},
    {no: "A8", gender: "woman"},
    {no: "A9", gender: "man"},
    {no: "A10", gender: "man"},
    {no: "B1", gender: ""},
    {no: "B2", gender: ""},
    {no: "B3", gender: ""},
    {no: "B4", gender: ""},
    {no: "B5", gender: "man"},
    {no: "B6", gender: ""},
    {no: "B7", gender: ""},
    {no: "B8", gender: ""},
    {no: "B9", gender: ""},
    {no: "B10", gender: ""},
    {no: "C1", gender: ""},
    {no: "C2", gender: "woman"},
    {no: "C3", gender: ""},
    {no: "C4", gender: ""},
    {no: "C5", gender: ""},
    {no: "C6", gender: ""},
    {no: "C7", gender: ""},
    {no: "C8", gender: ""},
    {no: "C9", gender: "woman"},
    {no: "C10", gender: "man"},
    {no: "D1", gender: ""},
    {no: "D2", gender: ""},
    {no: "D3", gender: "woman"},
    {no: "D4", gender: ""},
    {no: "D5", gender: ""},
    {no: "D6", gender: "woman"},
    {no: "D7", gender: ""},
    {no: "D8", gender: ""},
    {no: "D9", gender: ""},
    {no: "D10", gender: ""},

]

interface Props {
    currentUser: User | null
    price: number | undefined
}

const Bus: React.FC<Props> = ({currentUser, price}) => {
    const [chairs, setChairs] = useState(chair)
    const [selectedChairs, setSelectedChairs] = useState<String[]>([])
    const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom)

    const handleClick = (no: string) => {
        const userGender = currentUser?.gender
        const number = no.split("")[1]
        const letter = no.split("")[0]

        if (price === undefined) {
            return null
        }

        if (selectedChairs.includes(no)) {
            setSelectedChairs(prevState => prevState.filter(item => item !== no))
            setTotalPrice(prev => prev - selectedChairs.length * price)
            return null
        }
        const findChair = chairs.find(item => item.no === no)
        if (findChair?.gender) {
            return null
        }

        if (selectedChairs.length === 5) {
            return (
                toast.error("5 koltuktan fazla seçemezsiniz")
            )
        }

        if (letter === "A") {
            const otherChair = chairs.find(item => item.no === "B" + number)
            if (otherChair?.gender === "" || userGender === otherChair?.gender) {
                const findChair = chairs.find(item => item.no === no)
                if (findChair?.gender === "") {
                    setTotalPrice(prev => prev + price)
                    return setSelectedChairs(prevState => [...prevState, no])
                }
            }else {
                return (
                    toast.error("Bu koltuk yanındaki koltukla aynı cinsiyet olmalıdır")
                )
            }
        } else if (letter === "B") {
            const otherChair = chairs.find(item => item.no === "A" + number)
            if (otherChair?.gender === "" || userGender === otherChair?.gender) {
                const findChair = chairs.find(item => item.no === no)
                if (findChair?.gender === "") {
                    setTotalPrice(prev => prev + price)
                    return setSelectedChairs(prevState => [...prevState, no])
                }
            }else {
                return (
                    toast.error("Bu koltuk yanındaki koltukla aynı cinsiyet olmalıdır")
                )
            }
        } else if (letter === "C") {
            const otherChair = chairs.find(item => item.no === "D" + number)
            if (otherChair?.gender === "" || userGender === otherChair?.gender) {
                const findChair = chairs.find(item => item.no === no)
                if (findChair?.gender === "") {
                    setTotalPrice(prev => prev + price)
                    return setSelectedChairs(prevState => [...prevState, no])
                }
            }else {
                return (
                    toast.error("Bu koltuk yanındaki koltukla aynı cinsiyet olmalıdır")
                )
            }
        } else if (letter === "D") {
            const otherChair = chairs.find(item => item.no === "C" + number)
            if (otherChair?.gender === "" || userGender === otherChair?.gender) {
                const findChair = chairs.find(item => item.no === no)
                if (findChair?.gender === "") {
                    setTotalPrice(prev => prev + price)
                    return setSelectedChairs(prevState => [...prevState, no])
                }
            }else {
                return (
                    toast.error("Bu koltuk yanındaki koltukla aynı cinsiyet olmalıdır")
                )
            }
        }




    }

    return (
        <div className="p-5 flex flex-col gap-10">
            <div className='border rounded-md'>
            <div className="grid grid-cols-10 grid-rows-2 gap-5 p-5">
                {chairs.slice(0,20).map((item) => (
                    <div key={item.no} className="col-span-1">
                        <div className="relative rounded-md hover:opacity-50 cursor-pointer text-white w-16 h-16 border flex items-center justify-center">
                            <PiArmchairFill onClick={() => handleClick(item.no)} size={35}
                                            className={`${
                                                item.gender === "man"
                                                    ? "text-blue-500"
                                                    : item.gender === "woman"
                                                        ? "text-red-500"
                                                        : selectedChairs.includes(item.no)
                                                            ? "text-green-500"
                                                            : "text-white"
                                            }`}/>
                            <span className="font-bold text-xs">{item.no}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center w-2/3 mx-auto'>
            <AiOutlineRight size={30} className='text-white mx-auto'/>
            <AiOutlineRight size={30} className='text-white mx-auto'/>
            <AiOutlineRight size={30} className='text-white mx-auto'/>
            </div>
            <div className="grid grid-cols-10 grid-rows-2 gap-5 p-5">
                {chairs.slice(20, 40).map((item) => (
                    <div key={item.no} className="col-span-1">
                        <div className="relative rounded-md hover:opacity-50 cursor-pointer text-white w-16 h-16 border flex items-center justify-center">
                            <PiArmchairFill onClick={() => handleClick(item.no)} size={35}
                                            className={`${
                                                item.gender === "man"
                                                    ? "text-blue-500"
                                                    : item.gender === "woman"
                                                        ? "text-red-500"
                                                        : selectedChairs.includes(item.no)
                                                            ? "text-green-500"
                                                            : "text-white"
                                            }`}/>
                            <span className="font-bold text-xs">{item.no}</span>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Bus;
