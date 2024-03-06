"use client";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const Modal = ({ isOpen, onClose, children }) => {
    useLockBodyScroll();

    return (
        <div
            className={`fixed z-50 inset-10 overflow-y-auto px-4 sm:px-6 ${
                isOpen ? "bg-gray-500 bg-opacity-75" : "hidden"
            }`}
            aria-hidden="true"
        >
            <div className="relative mx-auto p-4 w-full max-w-sm rounded-md bg-white shadow-md">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <h5 className="text-lg font-medium leading-6">Modal Title</h5>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;