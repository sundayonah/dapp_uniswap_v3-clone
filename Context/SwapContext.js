import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import {
  checkIfWalletIsConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLifeToken,
  connectingWithDAIToken,
  connectingWithIWETHToken,
  connectingWithSingleSwapToken,
} from "../Utils/appFeatures";

import { IWETHABI } from "./Constants";
import ERC20 from "./ERC20.json";

export const SwapTokenContext = React.createContext();
export const SwapTokenContextProvider = ({ children }) => {
  
  //useState
  const [account, setAcount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth, setWeth] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    "0x6A47346e722937B60Df7a1149168c0E76DD6520f", //BOO TOKEN
    "0x7A28cf37763279F774916b85b5ef8b64AB421f79", //LIFE TOKEN
  ];

  //FETCHING USERS DATA
  const fetchingData = async () => {
    try {
      //GET USER ACOUNT
      const userAccount = await checkIfWalletIsConnected();
      setAcount(userAccount);

      //create PROVIDER
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      // CHECK USER BALANCE
      const balance = await provider.getBalance(userAccount);
      const convertedBal = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(convertedBal);
      setEther(ethValue);

      //GET NETWORK NAME

      const network = await provider.getNetwork();
      setNetworkConnect(network.name);

      //ALL token balance and data
      addToken.map(async (el, i) => {
        //GETTING CONTRACT
        const contract = new ethers.Contract(el, ERC20, provider);
        //GETTING BALANCE OF TOKEN
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();
        const convertTokenBal = ethers.utils.formatEther(tokenLeft);
        // console.log("token balance", convertTokenBal);

        //GET NAME AND SYMBOL
        const symbol = await contract.symbol();
        const name = await contract.name();

        tokenData.push({
          name: name,
          symbol: symbol,
          tokenBalance: convertTokenBal,
        });
        // console.log(tokenData);

        //DAI BALANCE
        const daiContract = await connectingWithDAIToken();
        const daiBal = await daiContract.balanceOf(userAccount);
        const daiToken = BigNumber.from(daiBal).toString();
        const convertTokendai = ethers.utils.formatEther(daiToken);
        setDai(convertTokendai);

        //WETH BALANCE
        const wethContract = await connectingWithIWETHToken();
        const wethBal = await wethContract.balanceOf(userAccount);
        const wethToken = BigNumber.from(wethBal).toString();
        const convertTokenweth = ethers.utils.formatEther(wethToken);
        setWeth(convertTokenweth);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  //SINGLE SWAP TOKEN
  const singleSwapToken = async () => {
    try {
      let singleSwapToken;
      let weth;
      let dai;

      singleSwapToken = await connectingWithSingleSwapToken();
      weth = await connectingWithIWETHToken();
      dai = await connectingWithDAIToken();

      const amountIn = 10n ** 18n;

      await weth.deposit({ value: amountIn });
      await weth.approve(singleSwapToken.address, amountIn);

      //SWAP

      await singleSwapToken.swapExactInputSingle(amountIn, {
        gasLimit: 300000,
      });

      const balance = await dai.balanceOf(account);
      const transferAmount = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(transferAmount);
      setDai(ethValue);
      console.log("dai balance", ethValue);
    } catch {
      error;
      console.log(error);
    }
  };

  return (
    <SwapTokenContext.Provider
      value={{
        account,
        dai,
        weth,
        networkConnect,
        ether,
        connectWallet,
        tokenData,
        singleSwapToken,
      }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};

// const SwapContext = () => {
//   return <div>SwapContext</div>;
// };

// export default SwapContext;
