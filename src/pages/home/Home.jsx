import FirstSection from "../../components/sections/FirstSection";
import SecondSection from "../../components/sections/SecondSection";
import ThirdSection from "../../components/sections/ThirdSection";
import FourthSection from "../../components/sections/FourthSection";
import FifthSection from "../../components/sections/FifthSection";
import SixthSection from "../../components/sections/SixthSection";
import SeventhSection from "../../components/sections/SeventhSection";
import EightSection from "../../components/sections/EightSection";
import NinthSection from "../../components/sections/NinthSection";
import TenthSection from "../../components/sections/TenthSection";

import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EightSection/>
      <NinthSection/>
      <TenthSection/>
    </div>
  );
};

export default Home;
