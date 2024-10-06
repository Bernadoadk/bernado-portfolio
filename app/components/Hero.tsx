import { Section } from "./Section"
import { NextIcon } from "../icons/NextIcon"
import { VueIcon } from "../icons/VueIcon"
import { TailwindIcon } from "../icons/TailwindIcon"
import { TypescriptIcon } from "../icons/TypescriptIcon"
import { ReactIcon } from "../icons/ReactIcon"
import Link from "next/link"
import { Code } from "./Code"
import { UnrealEngineIcon } from "../icons/UnrealEngineIcon"


export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Bernado ADIKPETO</h2>
            <h3 className="text-3xl font-caption">
                Full Stack Web Dev 💻|🎮 Game Dev (Interm.)
            </h3>
            <p>
                I am a Freelance Web Developer specializing in{" "}
                <Link href="https://vuejs.org/">
                <Code className="inline-flex items-center gap-1">
                    <VueIcon size={10} className="inline"/> Vue.js
                </Code></Link>,{" "}
                <Link href="https://tailwindcss.com/"><Code className="inline-flex items-center gap-1"><TailwindIcon size={12} className="inline"/> Tailwind</Code></Link>,{" "} <Link href="https://react.dev/"><Code className="inline-flex items-center gap-1"><ReactIcon size={12} className="inline"/> React.js</Code></Link>,{" "} <Link href="https://nextjs.org/"><Code className="inline-flex items-center gap-1"><NextIcon size={14} className="inline"/> Next.js</Code></Link>,{" "}
                <Link href="https://www.typescriptlang.org/"><Code className="inline-flex items-center gap-1"><TypescriptIcon size={14} className="inline"/> TypeScript</Code></Link>
                and Game Developer in{" "} <Link href="https://www.typescriptlang.org/"><Code className="inline-flex items-center gap-1"><UnrealEngineIcon size={14} className="inline"/> Unreal Egine</Code></Link>.
            </p>
            <p>
            </p>
            <p>
                Originally from <Link href="https://www.typescriptlang.org/"><Code className="inline-flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/125px-Flag_of_Benin.svg.png" style={{width: 16, height: "auto"}} alt="benin flag" /> Benin</Code></Link> in West Africa, I currently live in Abomey-Calavi.
                I write about creative development from a front-end developer's perspective
                and can successfully lead projects as an intermediate-level full stack web developer,
                with more experience in front-end than back-end development.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
                src="https://avatars.githubusercontent.com/u/72017295?v=4"
                className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
                alt="bernado's picture"
            />
        </div>
    </Section>
}