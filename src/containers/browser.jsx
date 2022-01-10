import React from "react";
import { Heading, SmText, SubText } from "../constant/styles/text";
import cha1 from "../assets/svg/cha1.svg";
import cha0 from "../assets/svg/cha0.svg";
import cha3 from "../assets/svg/cha3.svg";
import cha4 from "../assets/svg/cha4.svg";
import hero from "../assets/svg/hero2.svg";
import video from "../assets/svg/video.svg";
import stroke from "../assets/svg/line.svg";
import rebg from "../assets/svg/rebg.svg";
// import { ReactComponent as Hero } from "../assets/svg/hero.svg";

import { paddingX } from "../constant/styles/spacing";
// const style = {
//     borderRadius: "60px 0px 60px 0px",
//   };
const stylebg = {
  // background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${rebg})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // borderRadius: "0px 0px 60px 0px",
};

const Browser = () => {
  return (
    <div className="md:py-40 py-4 md:px-32 sm:px-12 px-2 bg-dark-800">
      <div className="flex flex-col">
        <main
          className="grid sm:grid-cols-2 grid-cols-1 "
          style={{ borderRadius: "60px 0px 60px 0px" }}
        >
          <div className="relative flex-col">
            <img
              src={hero}
              className="w-full z-0 left-8"
              alt="web3.0 browser"
            />
            {/* <img src={stroke} alt="stroke" className="w-50 -bottom-10" /> */}
            {/* <img
              src={hero1}
              className="h-full z-20 absolute -bottom-96 left-0"
              alt="web3.0 browser"
            /> */}
            {/* <Hero className='w-full' /> */}
          </div>
          {/* features of web3 browser */}
          <div
            style={{ borderRadius: "0px 0px 60px 0px" }}
            // className="bg-dark-900"
          >
            <div style={stylebg} className=" pb-12 flex flex-col gap-8">
              <div className="md:px-12 px-2">
                <Heading className="text-primary-800">Web 3.0 Browser</Heading>
                <SmText className="text-white">
                  ZOR Web 3.0 is the core product on which the entire NutGain
                  ecosystem is built. The browser is the basic element to which
                  all major products, apps, stores, games, and various
                  entertainment decentralized applications will be added.{" "}
                </SmText>
              </div>
              <div className="md:px-12 px-2">
                <SubText className="text-white">
                  NutGain offers the following builts in functions
                </SubText>
                <div className="gap-2">
                  <SmText className="text-white text-xl">
                    &bull; Secure web cryptocurrency wallet
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Decentralized applications
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Decentralized games
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Web protection
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Voice and Video call
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Secure chat
                  </SmText>
                  <SmText className="text-white text-xl">
                    &bull; Multilayered VPN
                  </SmText>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main
          className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center  "
          style={{ borderRadius: "60px 0px 60px 0px" }}
        >
          <div className="relative flex-col">
            <img src={stroke} alt="stroke" className="w-50 " />
            {/* <img
              src={hero1}
              className="h-full z-20 absolute -bottom-96 left-0"
              alt="web3.0 browser"
            /> */}
            {/* <Hero className='w-full' /> */}
          </div>
          {/* features of web3 browser */}
          <div
            style={{ borderRadius: "0px 0px 60px 0px" }}
            // className="bg-dark-900"
          >
            <div style={stylebg} className=" py-0 flex flex-col gap-8">
              <div className="flex gap-4 mt-2 ml-6">
                {/* <img src={stroke} alt="stroke" className="w-full" />{" "} */}
                <p className="text-primary-800 font-prime text-xl font-bold text-center flex ">
                  Watch Video
                  <img
                    src={video}
                    className="w-15 pl-2  pr-5"
                    alt="web3.0 browser"
                  />
                </p>
                <a
                  href="https://online.flippingbook.com/view/956899460/"
                  target="_blank"
                >
                  <p className="text-primary-800 text-xl font-prime font-bold text-center flex ">
                    Find out more &rarr;
                  </p>
                </a>
              </div>
            </div>
          </div>
        </main>
        <div
          className={`${paddingX} w-full flex flex-col items-end py-20 bg-dark-800`}
        >
          <SubText className="text-primary-800 text-center pl-4 py-2 self-center">
            Some characteristics of ZOR
          </SubText>
          <div className="md:flex grid grid-cols-2 w-full pt-12 justify-between gap-8 ">
            <div className="flex flex-col  items-center">
              <img src={cha0} alt="zor" className="h-24 w-24" />
              <SmText className="text-white">Fast and ad-free</SmText>
            </div>
            <div className="flex flex-col items-center">
              <img src={cha1} alt="zor" className="h-24 w-24" />
              <SmText className="text-white">Private</SmText>
            </div>
            <div className="flex flex-col items-center">
              <img src={cha3} alt="zor" className="h-24 w-24" />
              <SmText className="text-white">Optimized and efficient</SmText>
            </div>
            <div className="flex flex-col items-center">
              <img src={cha4} alt="zor" className="h-24 w-24" />
              <SmText className="text-white">Has dark mode</SmText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
