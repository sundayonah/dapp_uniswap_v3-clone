import React, { useEffect, useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  //useState

  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnet"];
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a Wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image
              src={images.cross}
              alt="logo"
              width={50}
              hieght={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>
        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>
        <p className={Style.Model_box_para}>
          By connecting a wallet yoou agree to the Terms and Services
          <br /> and consent to its Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Model;
