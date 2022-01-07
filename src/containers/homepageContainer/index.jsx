import React from "react";
import Browser from "../browser";
import Exchange from "../exchange";
import Footer from "../footer";
import Hero from "../hero";
import Products from "../products";
import Publish from "../publish";
import Redistro from "../redistro";
import Reward from "../reward";
import Team from "../team";
import ProjectTimeline from "../timeline";
import Time from "../timeline/time";
import Modal from "./modal";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      {/* <Modal/> */}
      <Hero />
      <Reward />
      <Redistro />
      <Browser />
      <Exchange />
      <Products />
      <Time/>
      <ProjectTimeline />
      <Publish/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default Home;
