import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "../icons/ReactIcon"
import { Code } from "./Code"
import Link from "next/link"
import { TailwindIcon } from "../icons/TailwindIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { NextIcon } from "../icons/NextIcon"
import { UnrealEngineIcon } from "../icons/UnrealEngineIcon"

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42} className="animate-spin" style={{animationDuration: "10s",}}/>
                    <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">
                        My main framework is <Link href="https://react.dev/"><Code className="inline-flex items-center gap-1"><ReactIcon size={12} className="inline-flex items-center gap-1"/> React.js/native</Code></Link>. I also used <Link href="https://nextjs.org/"><Code className="inline-flex items-center gap-1"><NextIcon size={14} className="inline"/> Next.js</Code></Link> as a backend and frontend framework and I can create <u>beautiful</u> application using <Link href="https://tailwindcss.com/"><Code className="inline-flex items-center gap-1"><TailwindIcon size={12} className="inline"/> TailwindCSS</Code></Link>.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <UnrealEngineIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Unreal Engine 5</h3>
                    <p className="text-sm text-muted-foreground">
                        In game development, I use <Link href="https://tailwindcss.com/"><Code className="inline-flex items-center gap-1"><UnrealEngineIcon size={12} className="inline"/> Unreal Engine 5</Code></Link> to create immersive and interactive gameplay experiences.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <GithubIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight">Github</h3>
                    <p className="text-sm text-muted-foreground">
                        I can use <Link href="https://github.com/Bernadoadk"><Code className="inline-flex items-center gap-1"><GithubIcon size={12} className="inline-flex items-center gap-1" />Github</Code></Link> for deployment and hosting, source code management, automation with GitHub Actions, and comprehensive project documentation.
                    </p>
                </div>
            </div>
    </Section>
}