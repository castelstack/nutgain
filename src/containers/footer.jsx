import React from "react";
import logo from "../assets/svg/logo.svg";
import cup from "../assets/svg/cup.svg";
import insta from "../assets/svg/in.svg";
import msg from "../assets/svg/mm.svg";
import linkdin from "../assets/svg/link.svg";
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
    <div className='bg-dark-900'>
      <div
        style={style}
        className={`${paddingX} flex flex-col gap-12 items-start  py-12`}
      >
        <img src={logo} alt='nutgain logo' className='h-12 w-32' />
        {/* footer list */}
        <div className='flex md:flex-row flex-col items-start w-full justify-between'>
          <div className='flex flex-col'>
            <SubText className='font-bold text-white'>Product</SubText>
            <div className='flex flex-col gap-3 '>
              {products.map((el) => (
                <SmText key={el} className='text-white capitalize'>
                  {el}
                </SmText>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <SubText className='font-bold text-white'>Site</SubText>
            <div className='flex flex-col gap-3 '>
              {site.map((el) => (
                <SmText key={el} className='text-white capitalize'>
                  {el}
                </SmText>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <SubText className='font-bold text-white'>Help</SubText>
            <div className='flex flex-col gap-3 '>
              {help.map((el) => (
                <SmText key={el} className='text-white capitalize'>
                  {el}
                </SmText>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <SubText className='font-bold text-white'>Social</SubText>
            <div className='flex gap-2 items-start'>
              <img src={insta} alt='insta' className='h-20 w-20' />
              <img src={linkdin} alt='linkdin logo' className='h-20 w-20' />
              <img src={msg} alt='msg ' className='h-20 w-20' />
              <img src={cup} alt='cup ' className='h-20 w-20' />
            </div>
          </div>
        </div>
        <hr className='text-white py-1' />

        <p className='text-white text-sm tracking-wider'>
          Copyright &copy;2021 NutGain All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const products = [
  "Web3 Browser",
  "DeFi exchange",
  "wallet",
  "NFTs",
  "MetaVerse",
  "E-Hype E-Commerce",
];

const site = [
  "privacy policy",
  "terms and conditions",
  "career oppurtunity",
  "report a security issue",
];
const help = ["FAQ", "Legal and risk disclaimer"];
