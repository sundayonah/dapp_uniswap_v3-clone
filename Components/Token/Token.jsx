import React from "react";
import Image from "next/image";

//import internal
import Style from "./Token.module.css";
import images from "../../assets";
import { Toggle } from "../index";

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
      <div className={Style.Token_box}>
        <div className={Style.Token_box_heading}>
          <h4>Setting</h4>
          <div className={Style.Token_box_heading_img}>
            <Image
              src={images.cross}
              alt="cross"
              hieght={50}
              width={50}
              onClick={() => setOpenSetting(false)}
            />
          </div>
        </div>
        <p className={Style.Token_box_para}>
          Slippage Tolerance
          <Image src={images.lock} alt="lock" hieght={20} width={20} />
        </p>
        <div className={Style.Token_box_input}>
          <button>Auto</button>
          <input type="text" placeholder="0.15%" />
        </div>

        <p className={Style.Token_box_para}>
          Slippage Tolerance
          <Image src={images.lock} alt="lock" hieght={20} width={20} />
        </p>
        <div className={Style.Token_box_input}>
          <input type="text" placeholder="0.30%" />
          <button>Minutes</button>
        </div>
        <h2>Interface Setting</h2>
        <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>Transaction deadline</p>
          <Toggle label="No" />
        </div>
      </div>
    </div>
  );
};

export default Token;
