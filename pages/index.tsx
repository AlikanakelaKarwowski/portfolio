import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { GetServerSideProps, GetStaticProps } from "next";
import { PageInfo, Experience, Social, Project, Skill } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import useAsyncEffect from "use-async-effect";
import { useState } from "react";
type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({}: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    //create use state to save info from useAsyncEffect
    const [pageInfo, setPageInfo] = useState<PageInfo>({} as PageInfo);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [socials, setSocials] = useState<Social[]>([]);

    useAsyncEffect(async () => {
        setPageInfo(await fetchPageInfo());
        setExperiences(await fetchExperiences());
        setSkills(await fetchSkills());
        setProjects(await fetchProjects());
        setSocials(await fetchSocials());
        setIsLoaded(true);
    }, []);
    return isLoaded ? (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
            <Head>
                <title>Alexanders Portfolio</title>
            </Head>
            <Header socials={socials} />
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>
            <section id="about" className="snap-start">
                <About pageInfo={pageInfo} />
            </section>
            <section id="experience" className="snap-start">
                <WorkExperience experiences={experiences} />
            </section>
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>
            <section id="contact" className="snap-start">
                <Contact />
            </section>
        </div>
    ) : null;
}

// export const getServerProps: GetServerSideProps<Props> = async () => {

//     return {
//         props: {
//             pageInfo,
//             experiences,
//             skills,
//             projects,
//             socials,
//         },
//     };
// };
