import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#141414] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.glassdoor.com%2Fsqll%2F140233%2Fverisk-analytics-squarelogo-1447450310757.png&f=1&nofb=1&ipt=ec042fccbd05c23890fa2f59a369a9b3bb008aec1f3f9a8a9f5896b568a7fb2f&ipo=images"
            ></motion.img>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Software Developer I</h4>
                <p className="font-bold text-2xl mt-1">Verisk Analytics</p>
                <div className="flex space-x-2 my-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                        alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">Started work... - Ended....</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
