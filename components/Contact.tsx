import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:akk96.developer@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
    };
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0">
            <h3 className="sectionHeader">Contact</h3>
            <div className="flex flex-col space-y-10 z-20">
                <h4 className="text-4xl font-semibold text-center">
                    I&apos;ve got the skills you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk</span>
                </h4>
                <div className="space-y-10 z-20">
                    <div className="flex item-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">3305108353</p>
                    </div>
                    <div className="flex item-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">akk96.developer@gmail.com</p>
                    </div>
                    <div className="flex item-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">4947 N Nile Dr Lehi UT, 84043</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register("message")} placeholder="Message" className="contactInput" />
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                        Submit
                    </button>
                </form>
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"></div>
        </div>
    );
}

export default Contact;
