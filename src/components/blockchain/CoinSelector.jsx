import React from 'react';
import { cn } from "@/utils/cn"

const CoinSelector = ({ selectedCoin, setSelectedCoin, getCoins }) => {
    return (
        <>
            <p>Stable Coins</p>
            <div className="flex flex-row gap-4">
                {getCoins.map((coin) => {
                    const backgroundColor = coin.name === selectedCoin ? 'bg-gray-900' : 'bg-white';
                    const textColor = coin.name === selectedCoin ? 'text-white' : 'text-black';
                    const hoverColor = coin.name === selectedCoin ? 'bg-gray-900' : 'bg-gray-300';
                    const cursorStyle = coin.enable === 1 ? 'cursor-pointer' : 'cursor-not-allowed';
                    const opacityClass = coin.enable ? 'opacity-100' : 'opacity-50';

                    return (
                        <div
                            className={`flex flex-col gap-2 items-center 
                                p-4 rounded-2xl w-24 h-24
                                ${backgroundColor} hover:${hoverColor} ${cursorStyle} ${opacityClass}`}
                            onClick={() => {
                                if (coin.enable) {
                                    setSelectedCoin(coin.name)
                                }
                            }}
                            key={coin.name}
                        >
                            <div className="relative h-10 w-10">
                                <img
                                    src={coin.image}
                                    alt={coin.name}
                                    className={cn("absolute h-full w-full", `${coin.secondImage ? 'left-1/3 transform -translate-x-1/2' : ''}`)}
                                />
                                {coin.secondImage && (
                                    <img
                                        src={coin.secondImage}
                                        alt={`${coin.name}-second`}
                                        className="absolute h-full w-full left-3/4 transform -translate-x-1/2"
                                    />
                                )}
                            </div>
                            <p className={`${textColor} text-sm`}>{coin.name}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CoinSelector;
