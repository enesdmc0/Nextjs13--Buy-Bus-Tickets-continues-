import React from 'react';
import {BsCalendarDate} from "react-icons/bs";
import {FiClock} from "react-icons/fi";
import {PiArmchairDuotone} from "react-icons/pi";
import {AiOutlineRight} from "react-icons/ai";
import {FaRoute} from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/Button";
import getExpeditions from "@/actions/getExpedition";
import Bus from "@/components/Bus";
import getCurrentUser from "@/actions/getCurrentUser";
import TicketDetail from '@/components/TicketDetail';


const TicketSales = async ({params}: { params: any }) => {
    const id = params.id;
    const currentExpedition = await getExpeditions(id)
    const currentUser = await getCurrentUser()
    const hour = currentExpedition?.travelTime.split("-")[0]
    const minute = currentExpedition?.travelTime.split("-")[1]
    return (
        <div>
            <TicketDetail currentExpedition={currentExpedition}/>
            <Bus currentUser={currentUser} price={currentExpedition?.price} />
        </div>
    );
};

export default TicketSales;
