import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 max-w-7xl justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1,
                }}
                src="https://media.licdn.com/dms/image/C4D03AQFXpzgZ4aF-gw/profile-displayphoto-shrink_800_800/0/1633888864421?e=1685577600&v=beta&t=dQvHoApiiek_frBeJr-xG9A5D0oiYToH97et5cZYDWg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
        </motion.div>
    );
}
