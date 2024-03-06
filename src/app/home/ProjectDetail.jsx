"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {cn} from "@/utils/cn";

const ProjectDetail = ({title, header, description, icon}) => {
    return (
        <div className={"flex flex-col gap-4 w-full p-10"}>
            <p>Project Detail</p>
            <h1>{title}</h1>
            <p>{header}</p>
            {/*<Image*/}
            {/*    src={icon}*/}
            {/*    alt="avatar"*/}
            {/*    height="100"*/}
            {/*    width="100"*/}
            {/*    className="rounded-2xl"*/}
            {/*/>*/}
            <p>{description}</p>
        </div>
    );
};

export default ProjectDetail;