import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: images.ether,
      name: "ETH",
    },

    {
      img: images.ether,
      name: "DAI",
    },
    {
      img: images.ether,
      name: "XRP",
    },
    {
      img: images.ether,
      name: "LUKSO",
    },
    {
      img: images.ether,
      name: "BTC",
    },
    {
      img: images.ether,
      name: "WETH",
    },

    {
      img: images.ether,
      name: "USDT",
    },
    {
      img: images.ether,
      name: "SOL",
    },
    {
      img: images.ether,
      name: "DOGE",
    },
  ];

  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <div className={Style.SearchToken_box_heading_img}>
            <Image
              src={images.cross}
              alt="close"
              width={50}
              height={50}
              onClick={() => openToken(false)}
            />
          </div>
        </div>
        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="search" height={20} width={20} />
          </div>
          <input type="text" placeholder="Search name or paste address" />
        </div>
        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (
                setActive(i + 1), tokens({ name: el.name, image: el.img })
              )}
            >
              <Image
                src={el.img || el.ether}
                alt="image"
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
