"use client"
import React, {useState} from 'react';
import Input from "@/components/input/Input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Success from '@/components/Success';
import Button from '@/components/Button';
import Loading from '@/components/Loading';

const Payment = () => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            tc: "",
            number: "",
            cartNumber: "",
            month: "",
            year: "",
            cvc: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true); // Form gönderildiğinde loading başlat
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000); // 1 saniye sonra loading'i kapat ve success'i göster
      }
    
      if (success) {
        return (
          <div>
            <Success title="Ödeme Başarılı." description='İyi Yolculuklar Dileriz..' />
          </div>
        )
      }
    

    return (
        <div>
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="max-w-xl lg:max-w-3xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                        {/*name*/}
                        <Input label="Name" name="name" register={register} type="text" id="name"
                               required
                               errors={errors?.name}/>
                        {/*surname*/}
                        <Input label="Surname" name="surname" register={register} type="text" id="surname"
                               required
                               errors={errors?.surname}/>
                        {/*email*/}
                        <Input label="Email" name="email" register={register} type="text" id="email"
                               required
                               errors={errors?.email}/>
                        {/*tc*/}
                        <Input label="TC" name="tc" register={register} type="text" id="tc"
                               required
                               errors={errors?.tc}/>

                        {/*number*/}
                        <Input label="Number" name="number" register={register} type="text" id="number" required
                               fullWidth errors={errors?.number}/>
                        {/*cartNumber*/}
                        <Input label="Cart Number" name="cartNumber" register={register} type="text" id="cartNumber"
                               required
                               errors={errors?.cartNumber}/>
                        {/*month*/}
                        <Input label="Month" name="month" register={register} type="text" id="month"
                               required errors={errors?.month}/>
                        {/*year*/}
                        <Input label="Year" name="year" register={register} type="text" id="year"
                               required errors={errors?.year}/>
                        {/*cvc*/}
                        <Input label="Cvc" name="cvc" register={register} type="text" id="text"
                               required errors={errors?.cvc}/>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <Button label='Ödeme Yap' width type='submit' color='#166534' />
                        </div>
                    </form>
                </div>
            </main>
            {loading && <Loading />}
        </div>
    );
};

export default Payment;
