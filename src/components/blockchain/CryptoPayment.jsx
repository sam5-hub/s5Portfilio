"use client";
import React, {useEffect, useState} from 'react';
import {getChains, getCoins} from "@/components/blockchain/coindata";
import { Skeleton } from "@/components/blockchain/skeleton"
import ChainSelector from "@/components/blockchain/ChainSelector";
import CoinSelector from "@/components/blockchain/CoinSelector";
import { ethers } from "ethers";

const CryptoPayment = ({ amount }) => {

    const [isLoading, setIsLoading] = useState(false);
    // blockchain
    const [selectedChain, setSelectedChain] = useState(null);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [selectNetwork, setSelectNetwork] = useState(null);
    const [signer, setSigner] = useState(null);

    //address
    const [userAddress, setUserAddress] = useState(null);
    const recipientAddress = "0xc146401f1c5dfb20e2b77fe9ae3892bec2a0b01b";


    const connectToWallet = async () => {
        if (window.ethereum == null) {
            alert("MetaMask not installed; using read-only defaults");
            setSigner(null);
            setUserAddress(null);
        } else {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
            const signer = provider.getSigner();
            setSigner(signer);
            // Get user address
            const address = await signer.getAddress();
            setUserAddress(address);
        }
    };

    const SwitchNetwork = async ({ chainId, onSetSigner }) => {
        let networkParams;
        const chainHexString = '0x' + chainId.toString(16);
        networkParams = { chainId: chainHexString };

        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [networkParams],
            });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []); // <- this prompts user to connect metamask
            const signer = provider.getSigner();
            onSetSigner(signer);

            setSelectNetwork(chainId);

        } catch (error) {
            console.error('Error switching network:', error.message);
        }
    }

    const sendTrans = async (e) => {

        setIsLoading(true)

        const abiWETH = [
            "function balanceOf(address) public view returns(uint)",
            "function deposit() public payable",
            "function transfer(address, uint) public returns (bool)",
            "function withdraw(uint) public",
        ];
        const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
        const contractWETH = new ethers.Contract(addressWETH, abiWETH, signer)
        const amountEther = ethers.utils.parseUnits(amount + "", 18);
        const transferData = contractWETH.interface.encodeFunctionData("transfer", [
            recipientAddress,
            amountEther,
        ]);
        const transaction = {
            to: recipientAddress,
            data: transferData,
            value: amountEther,
            gasLimit: 50000,
        };
        signer.sendTransaction(transaction)
            .then((tx) => {
                console.log("Transaction sent:", tx);
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500);
            })
            .catch((error) => {
                console.error("Error sending transaction:", error);
                setIsLoading(false)
            });
    };


    useEffect(() => {
        return () => {
            // setSelectedChain(getChains[0])
            // selectedCoin(getCoins()[1])
        };
    }, []);
    function onSelectedChain(chain) {
        setSelectedChain(chain);
        SwitchNetwork({
            chainId: chain.chainId,
            onSetSigner: (signer) => {
                // 处理 signer
                console.log('Signer:', signer);
            },
        }).then(r => {
            setSelectNetwork(chain.chainId)
            console.log("SwitchNetwork done")
        });
    }

    return (
        <div className="h-[70vh] w-[600px] rounded-lg flex justify-center text-white relative
        bg-gradient-to-br from-blue-800 to-blue-900">
            {isLoading ? (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <Skeleton className="h-[225px] w-[250px] rounded-xl"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-full p-10">
                    <ChainSelector
                        selectedChain={selectedChain}
                        onSelectedChain={onSelectedChain}
                        getChains={getChains()}
                    />
                    <CoinSelector
                        selectedCoin={selectedCoin}
                        setSelectedCoin={setSelectedCoin}
                        getCoins={getCoins(selectedChain ? selectedChain.name : null)}
                    />

                    <p className={"text-[60px] text-white text-center"}>${amount}</p>


                    {/*{selectNetwork && <p>Chain Network: {selectNetwork}</p>}*/}

                    <div className="flex flex-col gap-2 p-4">

                        {userAddress != null ?
                            (<div className="flex flex-col gap-4">
                                <button onClick={sendTrans} className="w-full p-4 bg-blue-800 text-white rounded-2xl hover:bg-blue-700">Go
                                    Pay</button>
                                <button className={"w-full p-4 bg-blue-800 text-white text-center rounded-2xl hover:bg-blue-700"}>{userAddress}</button>

                            </div>) :
                            (<div>
                                <button className="w-full p-4 bg-blue-800 text-white rounded-2xl"
                                        onClick={connectToWallet}>Connect to Wallet</button>
                            </div>)
                        }
                    </div>

                    <div className={"flex items-center justify-center  bottom-1 p-1"}>
                        <p className="text-sm">Select a chain and a coin & Pay</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CryptoPayment;