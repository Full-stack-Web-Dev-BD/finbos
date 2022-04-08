import { useEffect } from "react";
import { addRemoveClassBody } from "../../utils";

import { OurTeamInfo } from "../../data/data-containers/HomeDemo4/data-HomeDemo4.js";

import RoadmapInfo from "../../data/data-containers/HomeDemo4/data-RoadmapInfo.json";
import FaqInfo from "../../data/data-containers/HomeDemo4/data-FaqInfo.json";

import { HomeDemo4About3 } from "../../utils/allImgs";

import "./style/HomeDemo4.scss";

import Header from "../../layouts/Header";
import FooterPages from "../../layouts/Footer/FooterPages";
import SecHeroSection from "../../components/HeroSection";
import Roadmap from "../../components/Roadmap";
import Faq from "../../components/Faq";
import OurTeam from "../../components/OurTeam";
import Subscribe from "../../components/Subscribe";
import EarnBnb from "../../components/EarnBnb/EarnBnb";

const HomeDemo4Container = () => {
  useEffect(() => {
    addRemoveClassBody("darker");
  }, []);

  return (
    <div>
      <Header Title="Home Template4" />
      <SecHeroSection
        ClassSec="hero-section moving section-padding"
        ClassDiv="col-12 col-lg-6 col-md-12"
        specialHead="BNB Money || 10% Daily Return"
        title="Stable & Profitable Yield Farming Dapp With Users Insurance to protect all Investors"
        link1="Whitepaper"
        link2="Buy Token"
        img="./image/heroImage.png"
      />
      <EarnBnb />
      <div className="py-5">
        <Roadmap data={RoadmapInfo} ClassSpanTitle="gradient-text blue" />
      </div>
      {/* <Faq data={FaqInfo} ClassSpanTitle="gradient-text blue" /> */}
      <OurTeam data={OurTeamInfo} ClassSpanTitle="gradient-text blue" />

      <Subscribe />

      <FooterPages ClassSpanTitle="gradient-text blue" />
    </div>
  );
};

export default HomeDemo4Container;
