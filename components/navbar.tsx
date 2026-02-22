"use client"

import Link from "next/link";
import { ModeToggle } from "@/components/modetoggle";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HomeIcon, FolderIcon, Linkedin, Instagram } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const navItems = [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
];

const socialItems = [
    { href: "https://github.com/amankappooresabu", icon: SiGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/aman-sabu-9b775b279/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/aman.kappoore/", icon: Instagram, label: "Instagram" },
];
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="z-50 max-w-fit pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 sm:gap-1 rounded-2xl border border-border bg-background shadow-lg">
                {navItems.map((item) => (
                    <Tooltip key={item.href}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
                            >
                                <item.icon className="size-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent><p>{item.label}</p></TooltipContent>
                    </Tooltip>
                ))}

                <Separator orientation="vertical" className="h-6" />
                {socialItems.map((item) => (
                    <Tooltip key={item.href}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                target="_blank"
                                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
                            >
                                <item.icon className="size-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent><p>{item.label}</p></TooltipContent>
                    </Tooltip>
                ))}

                <Separator orientation="vertical" className="h-6" />

                <Tooltip>
                    <TooltipTrigger asChild>
                        <ModeToggle />
                    </TooltipTrigger>
                    <TooltipContent><p>Theme</p></TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
}