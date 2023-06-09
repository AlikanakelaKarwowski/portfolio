import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#141414] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
            ></motion.img>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light text-center">{experience?.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience?.company}</p>
                <div className="flex space-x-2 my-2">
                    {experience?.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full bg-white"
                            src={urlFor(technology.image).url()}
                            alt=""
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience?.dateStarted).toDateString()} -{" "}
                    {new Date(experience?.dateEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-md max-h-64 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]">
                    {experience?.points.map((point, i) => (
                        <li key={i} className="text-[#F7AB0A]">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
