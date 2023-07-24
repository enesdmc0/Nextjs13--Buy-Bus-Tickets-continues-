import React from 'react';
import Link from "next/link";

interface Props {
    title: string;
    route: string;
    url: string;
}

const AuthLink: React.FC<Props> = ({url, route, title}) => {
    return (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            {title}
            <Link className="font-bold underline text-gray-400"
                  href={`/${url}`}>{route}</Link>
        </p>
    );
};

export default AuthLink;
