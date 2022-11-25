import React, { useState, useContext, useEffect } from "react";

//internal import
import { HeroSection } from "../Components/index";
const Home = ({ accounts, tokenData }) => {
  return (
    <div>
      <HeroSection accounts="hey" tokenDat="DATA" />
    </div>
  );
};

export default Home;
