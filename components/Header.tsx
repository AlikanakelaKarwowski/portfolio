import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon url="https://www.youtube.com/@pchelphubdiscord" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://www.youtube.com/@pchelphubdiscord" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://www.youtube.com/@pchelphubdiscord" fgColor="gray" bgColor="transparent" />
            </motion.div>
            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <EnvelopeIcon className="cursor-pointer mx-2 text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    );
}
