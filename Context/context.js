import React from "react";

export const context = () => {
  //meta & contract connection
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [button, setbutton] = useState(null);
  const [buttonConnect, setButtonConnect] = useState(null);
  const [account, setAccount] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      accountChangeHandler(accounts[0]);
      setButtonConnect("Wallet Connect");
    } else {
      setError(alert("Need to install MetaMasK!"));
    }
  };

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await connectWalletHandler();
      const provider2 = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider2.getSigner();

      const routerContract = new ethers.Contract(
        routerAddress,
        routerABI,
        signer
      );
      const factoryAddress = await routerContract.factory();
      const weth = await routerContract.WETH();

      console.log("Here is ther Factory Contract address: ", factoryAddress);
      console.log("Here is ther WETH Contract addres: ", weth);
    }
  }

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  return <div></div>;
};
