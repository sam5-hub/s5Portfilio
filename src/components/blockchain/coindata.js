const getChains = () => [
    {
        id: 2,
        name: "Ethereum",
        image:"https://cryptologos.cc/logos/ethereum-eth-logo.svg",
        localImage:"/coin/ethereum.svg",
        chainId: 1,
    },
    {
        id: 3,
        name: "Polygon",
        image:"https://cryptologos.cc/logos/polygon-matic-logo.svg",
        localImage:"/coin/polygon.svg",
        chainId: 137
    },
    {
        id: 4,
        name: "BSC",
        image:"https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
        localImage:"/coin/bsc.svg",
        chainId: 56
    },
    // {
    //     id: 5,
    //     name: "SOL",
    //     image:"https://cryptologos.cc/logos/solana-sol-logo.svg",
    //     localImage:"/coin/solana.svg"
    // }

];
const getCoins = (chainName) => {
    const coins = [
        {
            name: "ETH",
            chain: "Ethereum",
            image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
            secondImage: "",
            enable: 0,
        },
        {
            name: "MATIC",
            chain: "Polygon",
            image: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
            secondImage: "",
            enable: 0,
        },
        {
            name: "MATIC-USDT",
            chain: "Polygon",
            image: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
            secondImage: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
            enable: 0,
        },
        {
            name: "BNB",
            chain: "BSC",
            image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
            secondImage: "",
            enable: 0,
        },
        {
            name: "BNB-USDT",
            chain: "BSC",
            image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
            secondImage: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
            enable: 0,
        }
    ];
    if (chainName!==null) {
        coins.forEach((coin) => {
            coin.enable = coin.chain === chainName ? 1 : 0;
        });
    }

    return coins;
};
export { getChains, getCoins };