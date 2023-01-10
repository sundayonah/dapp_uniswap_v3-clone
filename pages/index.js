import React, { useState, useContext, useEffect } from "react";

//internal import
import web3Connect from "../Layout/web3Connect";
import { HeroSection } from "../Components/index";
const Home = ({ accounts, tokenData }) => {
  return (
    <div>
      <HeroSection accounts="hey" tokenDat="DATA" />
    </div>
  );
};

export default Home;
