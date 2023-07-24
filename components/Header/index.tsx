"use client"
import {usePathname, useRouter} from 'next/navigation';
import React from 'react';
import {User} from "@prisma/client";
import Button from '../Button';
import { signOut } from 'next-auth/react';

interface Props {
    currentUser: User | null
}

const Header: React.FC<Props> = ({currentUser}) => {
const pathname = usePathname()
const url = pathname?.split("/")[1];
const router = useRouter()


if(url === "login" || url === "register") return null;
console.log(currentUser)
    return (
        <div className="flex items-center justify-between p-5 bg-gray-800 border-b border-b-white">
            <div className="text-6xl text-white font-bold">DMC</div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-white font-bold">{currentUser?.firstName} {currentUser?.lastName}</div>
                <div className="font-bold text-xs text-white">{currentUser?.email}</div>
                <Button label="Çıkış Yap" type="button" color='#dc2626' onClick={() => signOut()}/>
            </div>
        </div>
    );
};

export default Header;
