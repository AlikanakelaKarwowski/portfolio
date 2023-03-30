import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Alex",
            "I'm a Full Stack Developer",
            "I Love Programming",
            "I Love Dogs",
            "And I Love Fish!",
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
        </div>
    );
}
