import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"
import bernadoImage from "../images/Bernado-ADIKPETO.png"

export const Contacts = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge>Contact me</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col w-full gap-4">
            <ContactCard className="flex-1" url="https://www.linkedin.com/in/bernado-adikpeto-3025921a1/" name="Bernado ADIKPETO" image={bernadoImage}
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" description="93 connections" />
            <ContactCard className="flex-1" url="https://www.x.com/samsama200/" name="@samsama200" image={bernadoImage}
                mediumImage="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" description="10 followers" />
            <ContactCard className="flex-1" url="mailto:sam17adk@gmail.com" name="sam17adk@gmail.com" image={bernadoImage}
                mediumImage="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" description="Email me for any inquiries." />
            </div>
    </Section>
}