"use client";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

const Progress = ({ value, gradientColors }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(value);
    }, [value]);

    const progressVariants = {
        initial: {
            width: 0,
        },
        animate: {
            width: `${progress}%`,
        },
    };

    return (
        <div className="w-full bg-gray-800 rounded-3xl h-2">
            <motion.div
                variants={progressVariants}
                initial="initial"
                animate="animate"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`bg-gradient-to-t ${gradientColors} rounded-3xl h-full w-[${progress}%]`}
            />
        </div>
    );
};

export default Progress;

