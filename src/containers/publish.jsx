import React from "react";
import { SubText, SmText } from "../constant/styles/text";
import pb1 from "../assets/svg/pb1.svg";
import pb2 from "../assets/svg/pb2.svg";
import pb3 from "../assets/svg/pb3.svg";
import pb4 from "../assets/svg/pb4.svg";
import pb5 from "../assets/svg/pb5.svg";
import pb6 from "../assets/svg/pb6.svg";
import pbk from "../assets/svg/pinksale.png";
import yahoo from "../assets/svg/yahoo.svg";
import pre from "../assets/svg/pre.svg";
import { paddingX } from "../constant/styles/spacing";
// import { ScrollInRight } from "../constant/layout/animateOnScroll";

const Publish = () => {
  return (
    <div className=" pt-12 bg-primary-800 flex flex-col gap-12">
      <div
        className={`${paddingX} flex md:flex-nowrap flex-wrap items-start md:gap-12 gap-6 justify-between`}
      >
        {company.map((el) => (
          <div
            key={el.company}
            className="flex flex-col justify-items-center items-center"
          >
            <a className="z-50" rel="noreferrer" href={el.link} target="_blank">
              <img
                src={el.image}
                alt="zor"
                className="sm:h-32 sm:w-32 h-12 w-12"
              />
            </a>
            <SmText className="text-gray-900 font-bold">{el.company}</SmText>
          </div>
        ))}
      </div>
      <div className="flex sm:flex-row flex-col items-center md:gap-20 gap-4 justify-self-end">
        <SubText className="w-96 sm:pl-24 pl-4 flex text-gray-900">
          Published By
        </SubText>
        <div
          className="flex justify-evenly bg-white w-full sm:py-8 py-4"
          style={{ clipPath: "polygon(22% 0, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <div></div>

          <img src={yahoo} alt="zor" className="h-32 md:w-1/4 w-32" />

          <img src={pre} alt="zor" className="h-32 md:w-1/4 w-32" />
        </div>
      </div>
    </div>
  );
};

const company = [
  {
    image: pb1,
    company: "PancakeSwap",
    link: "https://pancakeswap.finance/",
  },
  {
    image: pb5,
    company: "AnyX",
    link: "https://www.projectxnft.com",
  },
  {
    image: pb3,
    company: "BscScan",
    link: "https://bscscan.com/address/0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab",
  },
  {
    image: pb4,
    company: "CoinMarketCap",
    link: "https://coinmarketcap.com/",
  },
  {
    image: pb2,
    company: "CoinGecko",
    link: "https://www.coingecko.com/en",
  },
  {
    image: pbk,
    company: "Pinksale",
    link: "https://www.pinksale.finance/#/",
  },
  {
    image: pb6,
    company: "InterFi Network",
    link: "https://github.com/interfinetwork/smart-contract-audits/blob/main/NutGain_0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab.pdf",
  },
];

export default Publish;

// NFT Market Place | Web3 | DeFi | Metaverse | dApps

// https://www.coingecko.com/en

// https://coinmarketcap.com/

// https://bscscan.com/address/0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab

// https://pancakeswap.finance/

// Interfi
// https://github.com/interfinetwork/smart-contract-audits/blob/main/NutGain_0xc091377110acfb780dfb9f6c200b2ef81d8ce4ab.pdf

// Pinksale icon to be addd

// https://www.pinksale.finance/#/
