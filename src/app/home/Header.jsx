"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {useState} from "react";
import FramerModal from "@/components/framemotion/FramerModal";
import CryptoPayment from "@/components/blockchain/CryptoPayment"
export function Header() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "Any",
        },
        {
            text: "Website",
        },
        {
            text: "With",
        },
        {
            text: "@Sam5.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const onPayment = ()=>
    {
        openModal();
    }
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[10rem] text-black">
            <div className="fixed top-4 left-4">
                <button className="w-40 h-10 border-blue-800 border rounded-2xl text-white font-mono p-2" onClick={onPayment}>
                    Crypto Pay $0.01
                </button>
            </div>
            <TypewriterEffect words={words}/>

            <FramerModal isOpen={isOpen} onClose={closeModal}>
                <CryptoPayment amount={"0.02"}/>
            </FramerModal>

        </div>
    );
}
