"use client"
import React from 'react';
import {FieldValues, UseFormRegister} from "react-hook-form";

interface Props {
    fullWidth?: boolean;
    label: string;
    name: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    disabled?: boolean;
    errors: any;
    id: string;
    options: string[]
}

const InputSelect: React.FC<Props> = ({errors, required, options, disabled, register, id, name, label, fullWidth}) => {
    return (
        <div className={`${fullWidth ? "sm:col-span-6" : "sm:col-span-3"} col-span-6 `}>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <select
                {...register(name, {required: required})}
                id={id}
                name={name}
                disabled={disabled}
                className={` ${errors ? "border-red-500" : "border-gray-200"} border mt-1 p-3 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200`}
            >
                <option selected disabled></option>
                {options.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            <label className="block mt-1  text-sm font-medium text-red-500">
                {errors && `${label} is required`}
            </label>
        </div>
    );
};

export default InputSelect;
