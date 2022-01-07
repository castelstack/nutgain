import React from "react";
import logo from "../assets/svg/logo.svg";
import cup from "../assets/svg/Group.svg";
import fb from "../assets/svg/facebook.svg";
import tel from "../assets/svg/telegram.svg";
import twitter from "../assets/svg/twitter1.svg";
import insta from "../assets/svg/instagram.svg";
import msg from "../assets/svg/medium.svg";
import linkdin from "../assets/svg/linkedin.svg";
import { SmText, SubText } from "../constant/styles/text";
import { paddingX } from "../constant/styles/spacing";
import bg from "../assets/svg/bghead.svg";

// hero component
const Footer = () => {
  const style = {
    background: ` url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-dark-900">
      <div
        style={style}
        className={`${paddingX} flex flex-col gap-12 items-start  py-12`}
      >
        <img src={logo} alt="nutgain logo" className="h-12 w-32" />
        {/* footer list */}
        <div className="flex md:flex-row flex-col gap-8 items-start w-full justify-between">
          <div className="flex flex-col">
            <SubText className="font-bold text-white mb-3">Products</SubText>
            <div className="flex flex-col gap-3 ">
              {products.map((el) => (
                <SmText key={el} className="text-white capitalize">
                  {el}
                </SmText>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SubText className="font-bold text-white mb-3">Site</SubText>
            <div className="flex flex-col gap-3 ">
              {site.map((el, index) => (
                <a href={el.link} target={el.link !== '' ? "_blank" : 'none'}>
                <SmText key={index} className="text-white capitalize">
                  {el.name}
                </SmText>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SubText className="font-bold text-white mb-3">Help</SubText>
            <div className="flex flex-col gap-3 ">
              {help.map((el) => (
                <a key={el} rel="noreferrer" href={el.link} target="_blank">
                  <SmText className="text-white capitalize">{el.title}</SmText>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <SubText className="font-bold text-white mb-4">Contact Us</SubText>
              <div className="flex gap-1 items-start">
                <a
                  rel="noreferrer"
                  href="https://t.me/Nutgaincommunity/"
                  target="_blank"
                >
                  <img
                    src={tel}
                    alt="insta"
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/nutgainofficial/"
                  target="_blank"
                >
                  <img
                    src={twitter}
                    alt="insta"
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <SubText className="font-bold text-white mt-20 mb-4">Our Pages</SubText>
              <div className="flex gap-2 items-start">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/nutgain/"
                  target="_blank"
                >
                  <img
                    src={fb}
                    alt="insta"
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
                <a
                  rel="noreferrer"
                  href="https://instagram.com/nutgainofficial/"
                  target="_blank"
                >
                  <img
                    src={insta}
                    alt="insta"
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/nutgain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkdin}
                    alt="linkdin logo"
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
                <a
                  href="https://nutgain.medium.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={msg}
                    alt="msg "
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
                <a
                  href="https://www.reddit.com/user/nutgainofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={cup}
                    alt="cup "
                    className="md:h-14 md:w-14 h-12 w-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white py-1 w-full" />

        <p className="text-white text-sm tracking-wider">
          Copyright &copy;2021 NutGain All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const products = [
  "Web 3.0 Browser",
  "DeFi exchange",
  "wallet",
  "NFTs",
  "MetaVerse",
  "D-Hyper E-commerce",
];

const site = [
  {
    name :  "privacy policy",
    link: 'https://www.privacypolicies.com/live/9423dd98-c6ba-4561-80c0-4f8204f965c4'
  },
  {
    name:  "terms and conditions",
    link: 'https://www.privacypolicies.com/live/49161a43-e3be-4dbc-97dd-a155424f793c'
  },
  {
    name :  "career oppurtunity",
    link: ''
  },
  {
    name:  "report a security issue",
    link: ''
  },
];
const help = [
  {
    title: "FAQ",
    link: "",
  },
  {
    title: "Legal and risk disclaimer",
    link: "https://github.com/nutgain/Legal-and-risk-disclaimer/wiki/Risk-&-Legal-Disclaimer",
  },
];
