"use client";
import React from "react";
import {motion} from "framer-motion";
import {AnimatedTooltipPreview} from "@/components/framemotion/TechStackAnimatedTool";
import BounceCard from "@/components/framemotion/BounceCard";
import {IconClipboardCopy} from "@tabler/icons-react";

export const BouncyCardsFeatures = () => {
    return (
        <section className="max-w-8xl p-4 text-slate-100">
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12">
                    <CardTitle></CardTitle>
                    <div
                        className="absolute bottom-0 left-24 right-24 top-32 translate-y-8 rounded-t-2xl
                        bg-gradient-to-br from-blue-800 to-blue-900 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <div className="block text-center font-extrabold text-emerald-50   pt-4">
                           DOWNLOAD RESUME
                        </div>

                    </div>
                </BounceCard>
            </div>
        </section>
    );
};



const CardTitle = ({children}) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};