"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {cn} from "@/utils/cn";

const ProjectDetail = ({title,imageUrl, description,detail}) => {
    return (
        <div className={"flex flex-col gap-4 w-full p-10"}>
            <div className={"flex flex-row gap-4 items-end"}>
                <img src={imageUrl} alt={imageUrl} className="w-24 h-24 object-cover rounded-2xl"/>
                <h1>{title}</h1>
            </div>
            <p>{description}</p>
            <p>{detail}</p>
        </div>
    );
};

export default ProjectDetail;