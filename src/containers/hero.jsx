import React from "react";
import logo from "../assets/svg/logo.svg";
import tel from "../assets/svg/telegram.svg";
import twitter from "../assets/svg/twitter1.svg";
import cup from "../assets/svg/Group.svg";
import linkdin from "../assets/svg/linkedin.svg";
import msg from "../assets/svg/medium.svg";
import bg from "../assets/svg/bghead.svg";
import squ from "../assets/svg/squ.svg";
import { Heading, SmText, SubText } from "../constant/styles/text";
import { paddingX } from "../constant/styles/spacing";
import { CountdownView } from "../components/countdown";
// import { ScrollInRight } from "../constant/layout/animateOnScroll";

// button component
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full ring-2 ring-white hover:ring-0 hover:shadow-md text-primary-900 md:text-base
      transition ease-in  text-sm font-bold md:px-12 px-6  md:py-4 py-3 bg-primary-800`}
    >
      {children}
    </button>
  );
};

const style = {
  background: ` url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

// hero component
const Hero = () => {
  return (
    <div className="bg-dark-800">
      <div
        style={style}
        className={`${paddingX} flex flex-col gap-8 relative    py-12`}
      >
        <div className="flex flex-row  justify-between w-full items-center ">
          <img src={logo} alt="nutgain logo" className="h-12 w-32" />
          <div className="flex flex-row  justify-between items-center ">
            <a
             className="pr-4"
              rel="noreferrer"
              href="https://github.com/nutgain/Smart_Contract_Audit/blob/main/NutGain_0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab.pdf"
              target="_blank"
            >
              <SubText className="text-primary-200">
               Audit Report
              </SubText>      
            </a>
            <a
              // className="z-50"
              rel="noreferrer"
              href="https://online.flippingbook.com/view/956899460"
              target="_blank"
            >
              <SubText className="text-primary-200">
               Whitepaper
              </SubText>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 z-30">
          <div className="flex flex-col gap-8">
            <Heading className="text-white">NutGain Ecosystem</Heading>
            <SmText className="text-primary-200">
              NutGain is offering users and developers powerful tools including
              Web3, DeFi, Metaverse, NFT, Crypto Wallet, D-Hyper Ecommerce and
              dApps.
            </SmText>
            <CountdownView />
          
            <div className="flex gap-4 py-2 items-center">   
              <a
                rel="noreferrer"
                  className={` rounded-full ring-2 ring-white hover:ring-0 hover:shadow-md text-primary-900 md:text-base
                  transition ease-in  text-sm font-bold md:px-12 px-6  md:py-4 py-3 bg-primary-800`}
                href="https://bscscan.com/address/0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab"
                target="_blank"
              >
                Contract Address
              </a>
              <a
                rel="noreferrer2"
                 className={`rounded-full ring-2 ring-white hover:ring-0 hover:shadow-md text-primary-900 md:text-base
                  transition ease-in  text-sm font-bold md:px-12 px-6  md:py-4 py-3 bg-primary-800`}
                href="https://forms.gle/g8A7L46t6Cdd2Vm26"
                target="_blank"
              >
               Whitelist your Wallet
              </a>
            
            </div>
            <div className="flex gap-2 items-center">
              <a
                className="z-50"
                rel="noreferrer"
                href="https://t.me/Nutgaincommunity/"
                target="_blank"
              >
                <img
                  src={tel}
                  alt="twitter"
                  className="md:h-14 md:w-14 h-12 w-12"
                />
              </a>
              <a
                className="z-50"
                rel="noreferrer"
                href="https://twitter.com/nutgainofficial/"
                target="_blank"
              >
                <img
                  src={twitter}
                  alt="insta"
                  className="md:h-14 md:w-14 h-12 w-12 z-50"
                />
              </a>

              {/* <a
                className="z-50"
                href="https://linkedin.com/company/nutgain"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkdin}
                  alt="linkdin logo"
                  className="md:h-14 md:w-14 h-12 w-12"
                />
              </a> */}
              {/* <a
                className="z-50"
                href="https://nutgain.medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={msg}
                  alt="msg "
                  className="md:h-14 md:w-14 h-12 w-12"
                />
              </a> */}
              {/* <a
                className="z-50"
                href="https://www.reddit.com/user/nutgainofficial"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={cup}
                  alt="cup "
                  className="md:h-14 md:w-14 h-12 w-12"
                />
              </a> */}
            </div>
            <div>
              <img
                src={squ}
                alt="cup "
                className=" absolute h-full w-full -bottom-20 -right-80 bg-no-repeat md:block hidden z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
