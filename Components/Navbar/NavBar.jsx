import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//import internal
import Style from "../../Components/Navbar/NavBar.module.css";
import { Model, TokkenList } from "../index";
import images from "../../assets";
import TokenList from "../TokenList/TokenList";

const Navbar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokkens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  //USESTATE

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setaccount] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* LOGO IMAGE */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} hieght={50} />
          </div>

          {/* MENU ITEMS */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* middle section */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} hieght={20} />
            </div>

            {/* //input section */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" hieght={15} width={15} />
            </div>
            <p>Network Name</p>
          </div>

          {account ? (
            <button
              onClick={() => {
                setOpenModel(true);
              }}
            >
              Connect
            </button>
          ) : (
            <button
              onClick={() => {
                setOpenTokenBox(true);
              }}
            >
              0xxsdss....
            </button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>
      {/* Token component */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default Navbar;
