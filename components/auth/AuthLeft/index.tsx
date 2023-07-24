import React from 'react';
import {FaReact} from "react-icons/fa";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    src: string;
}

const AuthLeft: React.FC<Props> = ({description, title, src}) => {
    return (
        <section
            className="relative w-full flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
            <Image
                alt="Night"
                fill
                src={src}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
                <FaReact className="text-white text-6xl" />
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {title}
                </h2>
                <p className="mt-4 leading-relaxed text-white/90">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default AuthLeft;
