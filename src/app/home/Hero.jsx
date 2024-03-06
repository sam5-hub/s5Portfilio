import React from 'react';
import {AvatarAnimatedPin} from "@/components/custom/AvatarAnimatedPin";
import {StackAnimatedTool} from "@/components/custom/StackAnimatedTool";
import AnimatedProcess from "@/components/framemotion/AnimatedProcess";
import Progress from "@/components/framemotion/AnimatedProcess";
import BounceCard from "@/components/framemotion/BounceCard";

const frontendStack = [
    {
        id: 1,
        name: "React",
        image: '/techStack/react.svg',
        designation: "90%",
    },
    {
        id: 2,
        name: "Javascript",
        designation: "90%",
        image: '/techStack/javascript.svg',
    },
    {
        id: 3,
        name: "Java",
        designation: "Spring Boot & Spring Cloud",
        image: '/techStack/java.svg',
    },
    {
        id: 4,
        name: "Web3 & Solidity",
        designation: "Web3.js & Ethers.js",
        image: '/techStack/eth.svg',
    },
    {
        id: 5,
        name: "CI/CD",
        designation: "DevOps & Docker & Kubernetes",
        image: '/techStack/docker.svg',
    },
];
const backendStack = [

    {
        id: 3,
        name: "Java",
        designation: "Spring Boot & Spring Cloud",
        image: '/techStack/java.svg',
    },
    {
        id: 5,
        name: "CI/CD",
        designation: "DevOps & Docker & Kubernetes",
        image: '/techStack/docker.svg',
    },
];
const blockchainStack = [
    {
        id: 1,
        name: "ethereum",
        image: '/coin/ethereum.svg',
        designation: "90%",
    },
    {
        id: 2,
        name: "bsc",
        image: '/coin/bsc.svg',
        designation: "90%",
    },
    {
        id: 3,
        name: "polygon",
        image: '/coin/polygon.svg',
        designation: "90%",
    },
    {
        id: 4,
        name: "solana",
        image: '/coin/solana.svg',
        designation: "90%",
    },
    {
        id: 5,
        name: "doge",
        image: '/coin/doge.svg',
        designation: "90%",
    },
];

const HeroPage = () => {
    return (
        <div className="grid grid-cols-5 gap-4 p-10 bg-black w-full h-[480px] rounded-lg
        border-white/[0.2] border">
            <div className="col-span-2 rounded-lg">
                <AvatarAnimatedPin/>
            </div>
            <BounceCard className="col-span-3 rounded-lg bg-gradient-to-r from-black to-black
             relative flex flex-col justify-center items-start gap-4">
                {/*<div className="flex flex-row gap-0 rounded-2xl bg-blue-800">*/}
                {/*    <p className="text-3xl font-semibold bg-blue-800 p-4">Tech Stack</p>*/}
                {/*    <p className="text-3xl font-semibold bg-white text-blue-800 p-4">Master</p>*/}
                {/*</div>*/}

                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-center justify-start h-24 w-full rounded-3xl">
                        <div className="w-40 flex flex-col gap-4">
                            <p>FrontEnd</p>
                            <Progress value={80} gradientColors={"from-blue-700 to-blue-800"}/>
                        </div>
                        <StackAnimatedTool items={frontendStack}/>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start  h-24 w-full rounded-3xl">
                        <div className="w-40 flex flex-col gap-4">
                            <p>Backend</p>
                            <Progress value={90} gradientColors={"from-blue-700 to-blue-800"}/>
                        </div>
                        <StackAnimatedTool items={backendStack}/>
                    </div>
                    <div
                        className="flex flex-row gap-4 items-center justify-start  h-24 w-full rounded-3xl">
                        <div className="w-40 flex flex-col gap-4">
                            <p>BlockChain</p>
                            <Progress value={70} gradientColors={"from-blue-700 to-blue-800"}/>
                        </div>
                        <StackAnimatedTool items={blockchainStack}/>
                    </div>
                </div>


            </BounceCard>
        </div>
    );
};

export default HeroPage;