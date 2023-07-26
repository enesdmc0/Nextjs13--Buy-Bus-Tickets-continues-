"use client"
import React from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import axios from "axios"
import AuthLink from "@/components/auth/AuthLink";
import Input from "@/components/input/Input";
import {toast} from "react-toastify";
import AuthLeft from "@/components/auth/AuthLeft";
import AuthLeftResponsive from "@/components/auth/AuthLeftResponsive";
import InputSelect from "@/components/input/InputSelect";



const Register = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            birthDate: "",
            telephone: "",
        }
    })



    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
        axios.post("/api/auth/register", data)
            .then(() => {
                router.refresh()
                router.push("/login")
                toast.success("Kayıt başarılı")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <AuthLeft
                    src="https://images.unsplash.com/photo-1620629228754-6ed8b519bd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    title="Welcome to DMC"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum."/>


                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <AuthLeftResponsive title="Welcome to DMC"
                                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum."/>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                            {/*firstname*/}
                            <Input label="First Name" name="firstName" register={register} type="text" id="firstName"
                                   required
                                   errors={errors?.firstName}/>
                            {/*lastname*/}
                            <Input label="Last Name" name="lastName" register={register} type="text" id="lastName"
                                   required
                                   errors={errors?.lastName}/>
                            {/*gender*/}
                            <InputSelect label="Gender" name="gender" register={register} id="gender" errors={errors?.gender} options={["man", "woman"]} required  />
                            {/*birthdate*/}
                            <Input label="Birth Date" name="birthDate" register={register} type="date" id="birthDate"
                                   required
                                   errors={errors?.birthDate}/>

                            {/*mail*/}
                            <Input label="Email" name="email" register={register} type="text" id="email" required
                                   fullWidth errors={errors?.email}/>
                            {/*number*/}
                            <Input label="Phone Number" name="telephone" register={register} type="text" id="telephone"
                                   required
                                   errors={errors?.telephone}/>
                            {/*password*/}
                            <Input label="Password" name="password" register={register} type="password" id="password"
                                     required errors={errors?.password}/>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Create an account
                                </button>
                                <AuthLink title="Already have an account?" route="Log In" url="login"/>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Register;
