import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
    const projects: Array<any> = ["Discord Bot", "In House MTurk Alternative", "This Portfolio Page"];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="sectionHeader">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechviral.net%2Fwp-content%2Fuploads%2F2018%2F10%2FDiscord-bots.jpg&f=1&nofb=1&ipt=863f06be54a439443f84045f200df3d49f4923ab089c676aa8a0c20007c746fb&ipo=images"
                            alt=""
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project}
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT{" "}
                                DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT{" "}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="flex space-x-5 overflow-x-scroll p110 snap-x snap-mandatory"></div>
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}

export default Projects;
