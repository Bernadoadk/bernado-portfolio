import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "../icons/GithubIcon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { XIcon } from "../icons/XIcons"
import { LinkedinIcon } from "../icons/LinkedinIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary-foreground">bernado.com</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/Bernadoadk" className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="https://x.com/samsama200" className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")}>
                        <XIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bernado-adikpeto-3025921a1/" className={cn(buttonVariants({ variant:"outline" }), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}