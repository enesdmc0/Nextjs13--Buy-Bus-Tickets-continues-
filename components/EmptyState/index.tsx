"use client"
import React from 'react';
import Button from "@/components/Button";
import ClientOnly from "@/components/ClientOnly";

interface Props {
    title: string;
    description: string;
    label: string;
}

const EmptyState: React.FC<Props> = ({description, title, label}) => {
    return (
        <ClientOnly>
            <div className="flex flex-col items-center border p-10 justify-center">
                <h1 className='text-white font-bold text-md'>{title}</h1>
                <p className='text-white font-bold text-md'>{description}</p>
            </div>
        </ClientOnly>
    );
};

export default EmptyState;
