import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Head>
                <title>Alexanders Portfolio</title>
            </Head>
            <Header />
            <section id="hero"></section>
            {/* Hero */}
            {/* About */}
            {/* Experience */}
            {/* Skills */}
            {/* Projects */}
            {/* Contact */}
        </div>
    );
}
