"use client"
import React from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import AuthLeft from "@/components/auth/AuthLeft";
import {toast} from "react-toastify";
import AuthLeftResponsive from "@/components/auth/AuthLeftResponsive";
import Input from "@/components/input/Input";
import AuthLink from "@/components/auth/AuthLink";

const Login = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn("credentials", {...data, redirect: false})
            .then((callback) => {
                if (callback?.ok) {
                    router.refresh()
                    router.push("/")
                    toast.success("Giriş başarılı")
                }
                if (callback?.error) {
                    toast.error("Giriş başarısız")
                }
            })
    }


    return (
        <section className="bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <AuthLeft title="Welcome to DMC"
                          src="https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum."/>
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <AuthLeftResponsive title="Welcome to DMC"
                                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum."/>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                            {/*mail*/}
                            <Input label="Email" name="email" register={register} type="text" id="email" required
                                   fullWidth errors={errors?.email}/>
                            {/*password*/}
                            <Input label="Password" name="password" register={register} type="password" id="password"
                                   required fullWidth errors={errors?.password}/>


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Log In
                                </button>
                                <AuthLink title="I don't have an account." route="Register" url="register"/>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Login;
