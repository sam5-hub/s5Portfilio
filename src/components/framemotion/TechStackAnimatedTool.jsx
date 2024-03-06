"use client";
import React,{useRef} from "react";
import {StackAnimatedTool} from "@/components/custom/StackAnimatedTool";
import {
    motion,
    MotionConfig,
    useAnimationControls,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring, useScroll,
} from "framer-motion";


export function AnimatedTooltipPreview() {
    // const ref =
    const controls = useAnimationControls();
    const {scrollYProgress} = useScroll() // 0-1
    const scaleSpringX = useSpring(scrollYProgress, {stiffness: 400, damping: 40})
    const background = useTransform(scaleSpringX, [0, 1], ["#af1a30", "#002273"])
    const handleClicked = () => {
        controls.start("flip")
            .then(r => controls.start("tap"))
            .then(r => controls.start("init"));
    };
    return (
        <div className="flex flex-col gap-4 p-4">

            <motion.div
                style={{
                    scaleX: scaleSpringX,
                    transformOrigin: "left",
                    background: background,
                    position: "sticky",
                    top: 10,
                    width: "100%",
                    height: "10px",

                }}
            >
            </motion.div>

        </div>

    );
}
