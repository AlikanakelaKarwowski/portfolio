import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Alex",
            "I'm a Full Stack Developer",
            "I Love Programming",
            "I Love Dogs",
            "And I Love Fish! 🐠",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://media.licdn.com/dms/image/C4D03AQFXpzgZ4aF-gw/profile-displayphoto-shrink_800_800/0/1633888864421?e=1685577600&v=beta&t=dQvHoApiiek_frBeJr-xG9A5D0oiYToH97et5cZYDWg"
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[16px]">Software Engineer</h2>
                <h1 className="text-4xl lg:text-5xl font-semibold scroll-px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroBtn">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroBtn">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroBtn">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroBtn">Projects</button>
                    </Link>
                </div>
                <div className="pt-5 flex flex-row justify-center items-center">
                    <Link href="#contact">
                        <button className="heroBtn">Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
