import React from "react";
import Image from "next/image";
import Style from "../../Components/TokenList/TokenList.module.css";
import images from "../../assets";
import { id } from "ethers/lib/utils";

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  // console.log("token data by me", tokenData);

  let tokenList = [];
  for (let i = 0; i < tokenData.lenght; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i]);
  }

  return (
    <div className={Style.TokenList}>
      <p
        className={Style.TokenList_close}
        onClick={() => setOpenTokenBox(false)}
      >
        <Image src={images.cross} alt="cross" height={30} width={30} />
      </p>
      <div className={Style.TokenList_title}>
        <h2>Your Token List</h2>
      </div>
      {tokenList.map((el, i) => (
        <div key={id} className={Style.TokenList_box}>
          <div className={Style.TokenList_box_info}>
            <p className={Style.TokenList_box_info_symbol}>{el.name}</p>
            <p>
              <span>{el.tokenBalance}</span>
              {el.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
