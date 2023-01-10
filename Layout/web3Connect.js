// import React, { useState } from "react";
// import { ethers } from "ethers";
// import { routerAddress, routerABI } from "./addresses";
// const [error, setError] = useState(null);
// const [provider, setProvider] = useState(null);
// const [signer, setSigner] = useState(null);
// const [contract, setContract] = useState(null);
// const [button, setbutton] = useState(null);
// const [buttonConnect, setButtonConnect] = useState(null);
// const [account, setAccount] = useState(null);
// const [defaultAccount, setDefaultAccount] = useState(null);

// const UserContext = React.createContext({
//   currentUser: null,
// });
// const web3Connect = () => {
//   const connectWalletHandler = async () => {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       accountChangeHandler(accounts[0]);
//       setButtonConnect("Wallet Connect");
//     } else {
//       setError(alert("Need to install MetaMask!"));
//     }
//   };

//   async function connectWallet() {
//     if (typeof window.ethereum !== "undefined") {
//       await connectWalletHandler();
//       const provider2 = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider2.getSigner();

//       const routerContract = new ethers.Contract(
//         routerAddress,
//         routerABI,
//         signer
//       );
//       const factoryAddress = await routerContract.factory();
//       const weth = await routerContract.WETH();

//       console.log("Here is ther Factory Contract address: ", factoryAddress);
//       console.log("Here is ther WETH Contract address: ", weth);
//     }
//   }

//   return <div>web3Connect</div>;
// };

// export default web3Connect;
