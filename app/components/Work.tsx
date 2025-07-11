import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image"; // Importez le composant Image de Next.js

export type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
}

export const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image
                src={props.image}
                alt={props.title}
                width={40} // Spécifiez la largeur
                height={40} // Spécifiez la hauteur
                className="w-10 h-10 object-contain rounded-md"
            />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge>Mission</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    )
}
