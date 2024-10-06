import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { CarTaxiFront, Cookie, Gamepad, Gamepad2, Languages, Music, ShoppingBag } from "lucide-react"
import { ContactCard } from "./ContactCard"
import { SideProject, SideProjectProps } from "./SideProject"
import { Work, WorkProps } from "./Work"

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="p-4 flex flex-col gap-2 w-full">
                <p className="text-lg text-muted-foreground">Side, fun project</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECT.map((project, index) => (
                        <SideProject 
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                        />
                    ))}
                </div>
            </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                            <Work 
                                key={index}
                                {...work}
                            />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard url="https://www.linkedin.com/in/bernado-adikpeto-3025921a1/" name="Bernado ADIKPETO" image="https://media.licdn.com/dms/image/v2/D4E03AQFQqOkT4sG7Vg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727865409050?e=1733356800&v=beta&t=cwuTQi96AhtqHoEI4w_Bj0_3Fkp8Q4Lan8VvuHXpHNw"
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" description="93 connections" />
                <ContactCard url="https://www.x.com/samsama200/" name="@samsama200" image="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/404299461_3550959411842530_2862157633117672424_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=QhcDenmn1dYQ7kNvgHQkmeS&_nc_ht=scontent-los2-1.xx&_nc_gid=AxeqPunnkt1jKRdKI26UwPm&oh=00_AYC1BAhnuW478_ou5vLTwTLHiPD31bAvuVJNBQj0E4BCDQ&oe=6703ADCF"
                    mediumImage="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" description="10 followers" />
            </Card>
        </div>
    </Section>
}

const SIDE_PROJECT: SideProjectProps[] = [
    {
        Logo: Cookie,
        title: "Food delvery",
        description: "A food delvery app",
        url: "/",
    },
    {
        Logo: ShoppingBag,
        title: "E-com platform",
        description: "A E-commerce platform with dashboard",
        url: "/",
    },
    {
        Logo: CarTaxiFront,
        title: "Uber clone",
        description: "A driver search app like uber",
        url: "/",
    },
    {
        Logo: Music,
        title: "Spotify clone",
        description: "A music platform like Spotify",
        url: "/",
    },
    {
        Logo: Gamepad2,
        title: "2D Video game",
        description: "A 2D platformer video game",
        url: "/",
    },
]

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQHOY1eGxs9Hag/company-logo_100_100/company-logo_100_100/0/1631365588495/seme_city_logo?e=1735776000&v=beta&t=zLdiRDNul_jWKvy8aoNFFlFc2eXG3qEy328o2cG4xww",
        title: "Seme City",
        role: "Web Developer Intern",
        date: "Jul 2020 - Oct 2020",
        url: "https://semecity.bj/",
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQFUFKlqYFOJTA/company-logo_200_200/company-logo_200_200/0/1683885728694/malaka_games_logo?e=1736380800&v=beta&t=DzSgjvjN2r3k25ZxqCQwrMNoZ1aZBTxGfmgGoJepVzo",
        title: "Malaika Games",
        role: "Game Dev Intern",
        date: "2019 and 2024",
        url: "https://malaikagames.com",
        //freelance: true,
    },
]