'use client';
import React, {useEffect, useRef} from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        backgroundPosition: "0 50%",
    },
    animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        repeat: Infinity,
        repeatDelay: 1
    },
};

const experienceData = [
    {
        title: 'Job 2',
        description: 'Description 2',
        gradientColor: 'from-blue-500 to-green-500',
    },
    // {
    //     title: 'Job 3',
    //     description: 'Description 3',
    //     gradientColor: 'from-purple-500 to-pink-500',
    // },
    // {
    //     title: 'Job 111',
    //     description: 'Description 4',
    //     gradientColor: 'from-yellow-500 to-red-500',
    // },
    // 添加更多经历
];


const ExperienceItem = ({ experience }) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            console.log('In view');
        }
    }, [isInView]);
    return (
        <motion.div
            whileInView={{ scale: 1.2 ,translateX: 300}}
            className="w-[400px] h-[300px] p-4 rounded-md m-4"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
            transition={{
                duration: 1,
                // repeat: Infinity,
                // repeatType: "reverse",
            }}
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            <h3 className="text-xl font-semibold text-white mb-2"
                style={
                {color: isInView ? "red" : "blue"}
            }>
                {experience.title}
            </h3>
            <p className="text-gray-200">{experience.description}</p>
        </motion.div>
    );
};

function ExperiencePage() {


    return (
        <div className="flex flex-row gap-4">
            {experienceData.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </div>
    );
};
export default ExperiencePage;
