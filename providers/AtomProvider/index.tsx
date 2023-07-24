"use client"
import React from 'react';
import {Provider} from "jotai";

const AtomProvider = ({children}: {children:React.ReactNode}) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
};

export default AtomProvider;
