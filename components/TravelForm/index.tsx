"use client"
import React from 'react';
import Input from "@/components/input/Input";
import InputSelect from "@/components/input/InputSelect";
import AuthLink from "@/components/auth/AuthLink";
import {useRouter} from "next/navigation";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";

const cities = ["Ankara", "Antalya", "Istanbul", "Adana", "Muğla"]

const TravelForm = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            departureCity: "",
            arrivalCity: "",
            travelHistory: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        router.push(`/?departureCity=${data.departureCity}&arrivalCity=${data.arrivalCity}&travelHistory=${data.travelHistory}`)
    }

    return (
        <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
            <div className="max-w-7xl w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid sm:grid-cols-6 md:grid-cols-12 grid-cols-6 gap-6">
                    <InputSelect label="Departure City" name="departureCity" register={register} id="departureCity" errors={errors?.departureCity} options={cities} required  />
                    <InputSelect label="Arrival City" name="arrivalCity" register={register} id="arrivalCity" errors={errors?.arrivalCity} options={cities} required  />
                    <Input label="Travel History" name="travelHistory" register={register} type="date" id="travelHistory" required errors={errors?.travelHistory}/>

                    <div className=" sm:col-span-3 col-span-6 flex items-center">
                        <button
                            className="border-gray-200 border mt-4 py-3 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200"
                        >
                            Search
                        </button>
                    </div>

                </form>
            </div>
        </main>
    );
};

export default TravelForm;
