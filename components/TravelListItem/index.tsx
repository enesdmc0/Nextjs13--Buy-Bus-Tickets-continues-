import React from 'react'
import { FiClock } from "react-icons/fi"
import { PiArmchairDuotone } from "react-icons/pi"
import Button from '../Button';
import { Bus } from '@prisma/client';
import {AiOutlineRight} from "react-icons/ai"
import {FaRoute} from "react-icons/fa"
import {BsCalendarDate} from "react-icons/bs";
import Link from "next/link";
interface Props {
    items: Bus
}

const TravelListItem: React.FC<Props> = ({items}) => { 
    const hour = items.travelTime.split("-")[0]
    const minute = items.travelTime.split("-")[1]
    return (
        <li className="flex justify-between text-white font-bold items-center border rounded-md px-5 gap-x-6 py-5">
            <div className='text-xl'>{items.companyName}</div>
            <div className="flex items-center gap-2">
                <BsCalendarDate/>
                <span>{items.travelHistory}</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <FiClock />
                    <p>{items.travelStartTime}</p>
                </div>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">({hour} Saat {minute} Dakika)</p>
            </div>
            <div>
                <div className='flex items-center gap-2 justify-center'>
                <PiArmchairDuotone />
                <p>{items.capacity}</p>
                <AiOutlineRight/>
                <p>{items.emptySeat}</p>
                </div>

                <div className='flex gap-3 items-center'>
                <span>{items.departureCity}</span>
                <FaRoute/>
                <span>{items.arrivalCity}</span>
                </div>
            
            </div>
            <div>{items.price} TL</div>
            <Link href={`/ticket-sales/${items.id}`}>
                <Button label="Satın Al" type="button" color='#15803d' />
            </Link>
        </li>
    );
};

export default TravelListItem;
