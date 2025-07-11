import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Importez le composant Image de Next.js
import type { StaticImageData } from "next/image";

export const ContactCard = (props: {
    image: string | StaticImageData;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
    className?: string;
}) => {
    return (
        <Link href={props.url} className={cn(props.className)}>
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative w-15 h-15">
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={40} // Vous pouvez ajuster la taille
                        height={40} // Vous pouvez ajuster la taille
                        className="w-10 h-10 rounded-full object-contain"
                    />
                    <Image
                        src={props.mediumImage}
                        alt={props.name}
                        width={16} // Vous pouvez ajuster la taille
                        height={16} // Vous pouvez ajuster la taille
                        className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
            </Card>
        </Link>
    )
}
