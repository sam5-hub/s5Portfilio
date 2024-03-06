"use client";
import React from "react";
import {PinContainer} from "@/components/ui/3d-pin";

export function AvatarAnimatedPin() {
    return (
        <div className="w-full flex items-center justify-center ">
            <PinContainer
                title="Github@sam5-hub"
                href="https://github.com/sam5-hub"
            >
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        @Sam5
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          Full Stack Developer, Blockchain & Frontend & Backend
                        </span>
                    </div>
                    <div
                        className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"/>
                     </div>
            </PinContainer>
        </div>
    );
}

// <MotionConfig whileHover={{scale: 1.2}}
//                           whileTap={{scale: 0.95, rotate: "2.5deg"}}
//                           transition={{duration: 0.2, ease: "easeInOut"}}>
//                 <motion.button
//                     className="bg-blue-800 p-4 m-4 w-[100px] h-16 rounded-lg"
//                     onClick={handleClicked}
//                 >Click Me 1
//                 </motion.button>
//                 <motion.button
//                     className="bg-blue-800 p-4  m-4 w-[100px] h-16 rounded-lg"
//                     whileHover={{scale: 1.2, rotate: "360deg"}}
//                 >Click Me 2
//                 </motion.button>
//             </MotionConfig>
//
//
//             <motion.button
//                 initial="init"
//                 animate={controls}
//                 transition={{duration: 0.5}}
//                 variants={{
//                     flip: {rotate: "360deg"},
//                     init: {rotate: "0deg"},
//                     anim: {scale: 1.2},
//                     tap: {scale: 0.95, rotate: "2.5deg"}
//                 }}
//                 whileHover="flip"
//                 whileTap="tap"
//                 className="bg-black p-4 m-4 w-[100px] h-[100px] rounded-lg"
//             > I will fade in
//             </motion.button>
