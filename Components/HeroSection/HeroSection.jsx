import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT

import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";
const HeroSection = ({ accounts, tokenData }) => {
  //usestate

  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  //TOKEN
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  const [tokenTwo, setTokenTwo] = useState({
    name: "",
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
            <small>8798</small>
          </button>
        </div>
        {/* <div>
          <Image
            src={images.arrow}
            alt="arrow"
            width={20}
            hieght={20}
            className={Style.HeroSection_box_heading_img}
          />
        </div> */}
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
            <small>8798</small>
          </button>
        </div>
        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn} onClick={() => {}}>
            Swap
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
