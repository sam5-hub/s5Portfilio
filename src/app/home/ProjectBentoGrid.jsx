"use client";
import { cn } from "@/utils/cn";
import React, {useState} from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

import ProjectDetail from "@/app/home/ProjectDetail";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
export function ProjectBentoGrid() {



    const [open, setOpen] = React.useState(false)
    const [currentItem, setCurrentItem]= useState(null);
    function handleItemClick(item) {
        console.log(item);
        setCurrentItem(item);
        setOpen(true);
    }

    return (
        <div className="w-full mx-auto">
            <BentoGrid className="w-full mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                        onClick={() => handleItemClick(item)}
                    />
                ))}
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerContent className="h-[500px]">
                        {currentItem && <ProjectDetail {...currentItem} /> }
                    </DrawerContent>
                </Drawer>
            </BentoGrid>

        </div>

    );
}
const Skeleton = ({imageUrl}) => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img src={imageUrl} alt={imageUrl} className="w-full h-full object-cover"/>
    </div>
);
const items = [
    {
        title: "DeImaginify",
        description: "AI-powered image generator @deimaginify.xyz",
        header: <Skeleton imageUrl="/project/deimgggg.png"/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        imageUrl: "/project/deimgggg.png",
        detail: "DeImaginify is an AI-powered image generator that can create images from text descriptions. It is a web-based application that uses GPT-3 to generate images from text descriptions. The application is built using React and TailwindCSS. It is hosted on Vercel and uses the OpenAI API to generate images. " +
            "The application is built using React and TailwindCSS. It is hosted on Vercel and uses the OpenAI API to generate images."
    },
    {
        title: "BlockPay 8",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton imageUrl="/project/defilama.png"/>,
        imageUrl: "/project/defilama.png",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "LionCash Collection",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton imageUrl="/project/lioncash.png"/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Zaful Facebook Ad Manager",
        description:
            "Facebook Ad Manager is an advertising tool to help businesses reach their target audience.",
        header: <Skeleton imageUrl="/project/zaful.png"/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
