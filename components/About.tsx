import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
    pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
            <h3 className="sectionHeader">About</h3>
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
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]/40">little</span> background
                </h4>
                <p className="text-sm">{pageInfo?.backgroundInformation}</p>
                <p className="text-sm">
                    I have a lot of experience programming, ranging from being able to successfully teach and explain
                    complicated programming concepts to non tech-inclined stakeholders and business divisions, to
                    developing multiple full stack applications for both the desktop and web, to successful cloud
                    deployment, to fast and efficient backend api&apos;s to suit the clients needs.
                </p>
            </div>
        </motion.div>
    );
}
