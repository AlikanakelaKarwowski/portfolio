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
                src="https://media.licdn.com/dms/image/C4D03AQFXpzgZ4aF-gw/profile-displayphoto-shrink_800_800/0/1633888864421?e=1685577600&v=beta&t=dQvHoApiiek_frBeJr-xG9A5D0oiYToH97et5cZYDWg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]/40">little</span> background
                </h4>
                <p className="text-sm">
                    I'm Alex. Im 26 years old, and have been programming since I was 12. Heres a little about me... I
                    first started programming on an old punch card computer that my mom used to work on back in the day.
                    I then got interested in robotics and did many middleschool and high school robotics competitions.
                    My team made it to the world championships, twice, and we placed in the top 10 both times. After
                    highschool I went on to college for robotics engineering, but I realized I prefer programming to the
                    mechanical engineering side of robotics so I changed majors. While in college I realized in addition
                    to programming I also loved to teach and ended up becoming a tutor to both my fellow students as
                    well as a tutor to aspiring middle and high schoolers. Because of my fondness to teach and help
                    others I started an online community for other students in the Comp Sci program to get help and talk
                    about programming. I got my first job during my 2nd year of college for one of my professors
                    startups. I was the only developer at the time and had to learn fast and work faster to keep up with
                    all the features they wanted added. After graduating I got my second job as a backend api developer.
                    My role soon turned into a full stack position to help meet the requirements of the team.
                </p>
                <p className="text-sm">
                    I have a lot of experience programming, ranging from being able to successfully teach and explain
                    complicated programming concepts to non tech-inclined stakeholders and business divisions, to
                    developing multiple full stack applications for both the desktop and web, to successful cloud
                    deployment, to fast and efficient backend api's to suit the clients needs.
                </p>
            </div>
        </motion.div>
    );
}
