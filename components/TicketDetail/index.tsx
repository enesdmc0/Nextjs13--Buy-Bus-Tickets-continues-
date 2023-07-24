"use client"
import { Bus } from '@prisma/client'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { FaRoute } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { PiArmchairDuotone } from 'react-icons/pi'
import Button from '../Button'
import Link from "next/link";
import { useAtom } from 'jotai'
import { totalPriceAtom } from '@/atom/GlobalAtom'
interface Props {
    currentExpedition: Bus | null
}

const TicketDetail: React.FC<Props> = ({ currentExpedition }) => {
    const hour = currentExpedition?.travelTime.split("-")[0]
    const minute = currentExpedition?.travelTime.split("-")[1]
    const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom)
    return (
        <div className='p-5'>
            <div className="flex text-white font-bold justify-between items-center border rounded-md px-5 gap-x-6 py-5">
                <div className='border p-2 rounded-md'>{currentExpedition?.companyName}</div>
                <div className="flex items-center border rounded-md p-2 gap-2">
                    <BsCalendarDate />
                    <span>{currentExpedition?.travelHistory}</span>
                </div>
                <div className='flex items-center justify-center p-2 border rounded-md flex-col'>
                    <div className='flex items-center gap-2'>
                        <FiClock />
                        <p>{currentExpedition?.travelStartTime}</p>
                    </div>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">({hour} Saat {minute} Dakika)</p>
                </div>
                <div className='border p-2 rounded-md'>
                    <div className='flex items-center gap-2 justify-center'>
                        <PiArmchairDuotone />
                        <p>{currentExpedition?.capacity}</p>
                        <AiOutlineRight />
                        <p>{currentExpedition?.emptySeat}</p>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <span>{currentExpedition?.departureCity}</span>
                        <FaRoute />
                        <span>{currentExpedition?.arrivalCity}</span>
                    </div>

                </div>
                <div className='border rounded-md p-2 flex flex-col items-center justify-center'>
                    <div>{currentExpedition?.price} TL</div>
                    <div className='underline'>Toplam: {totalPrice} TL</div>
                </div>
                    <Link href={"/payment"}>
                    <Button label="Devam Et" type="button" color='#15803d' />
                    </Link>
            </div>
            </div>
    )
}

export default TicketDetail