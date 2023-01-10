import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT

import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";
// import { Herosection } from "../Components/index";
import { ethers, providers } from "ethers";
import { SwapTokenContext } from "../../Context/SwapContext";

const HeroSection = ({ tokenData }) => {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);
  const Switch = ({}) => {};
  const { singleSwapToken, connectWallet, account, dai, ether } =
    useContext(SwapTokenContext);

  //TOKEN
  const [tokenOne, setTokenOne] = useState({
    name: "WETH",
    image: "",
  });

  const [tokenTwo, setTokenTwo] = useState({
    name: "USDC",
    image: "",
  });

  //JSX
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>

          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.cross}
              alt="cross"
              hieght={50}
              width={50}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button
            onClick={() => setOpenToken(true)}
            className={Style.HeroSection_box_button}
          >
            <Image
              src={images.image || images.etherlogo}
              width={20}
              hieght={20}
              alt="ether"
            />
            {tokenOne.name || "ETH"}
            <small>{ether.slice(0, 7)}</small>
          </button>
        </div>

        <div className={Style.img}>
          <Image
            src={images.arrow}
            alt="arrow"
            width={20}
            hieght={20}
            onClick={() => Switch()}
          />
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button
            onClick={() => setOpenTokensTwo(true)}
            className={Style.HeroSection_box_button}
          >
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              hieght={20}
              alt="ether"
            />
            {tokenTwo.name || "ETH"}
            <small>{dai.slice(0, 7)}</small>
          </button>
        </div>

        {account ? (
          <button
            className={Style.HeroSection_box_btn}
            onClick={() => singleSwapToken()}
          >
            Swap
          </button>
        ) : (
          <button
            onClick={() => connectWallet()}
            className={Style.HeroSection_box_btn}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openTokensTwo && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
