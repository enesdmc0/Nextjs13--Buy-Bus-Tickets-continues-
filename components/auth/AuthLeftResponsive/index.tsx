import React from 'react';
import {FaReact} from "react-icons/fa";

interface Props {
    title: string;
    description: string;
}

const AuthLeftResponsive: React.FC<Props> = ({description, title}) => {
    return (
        <div className="relative -mt-16 block lg:hidden">
            <FaReact className="text-white text-6xl" />
            <h1
                className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
            >
                {title}
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default AuthLeftResponsive;
