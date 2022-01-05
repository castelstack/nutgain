import React from "react";
import { motion } from "framer-motion";
import { Heading, SmText } from "../../constant/styles/text";
import cha3 from "../../assets/svg/cha3.svg";
import box from "../../assets/svg/box.svg";
import { TimeCard } from "./card";
import { paddingX } from "../../constant/styles/spacing";
import squ from "../../assets/svg/squb.svg";
import coin from "../../assets/svg/coin.svg";
import card from "../../assets/svg/card.svg";
import { ReactComponent as Stand } from "../../assets/svg/stand.svg";
import PieChart from "./pieChart";
import Percentage from "./percentage";

const ProjectTimeline = () => {
  return (
    <div className={`${paddingX} bg-dark-900 py-12 grid  grid-cols-1`}>
      <div className={` py-12  flex flex-col gap-12`}>
        <Heading className='text-primary-800'>Project Timelines</Heading>
        <div className='flex w-full items-stretch sm:flex-row flex-col justify-between gap-8 mt-4'>
          {data.map((el, idx) => (
            <TimeCard
              key={idx}
              icon={card}
              year={el.year}
              title={el.title}
              info={el.info}
            />
          ))}
        </div>
      </div>
      {/* tokenomics and mock trade view box */}
      <div
        className={` py-12 grid md:grid-cols-2 grid-cols-1 items-end w-full`}
      >
        <div className='-space-y-4 flex flex-col '>
          <aside className='flex  items-center md:ml-12 ml-2  md:gap-8  gap-0'>
            <div className='md:-space-y-44 -space-y-32 flex flex-col justify-items-center '>
              {/* <Coinn  className='h-40 w-40' /> */}
              <motion.img
                animate={{
                  scale: 1.1,
                  transition: {
                    ease: "linear",
                    duration: 10,
                    repeat: Infinity,
                  },
                }}
                src={coin}
                alt='msg '
                className='md:h-52 md:w-52 h-32 w-32 z-20'
              />
              <Stand className='md:h-52 md:w-52 h-32 w-32 z-10' />
            </div>
            <Heading className='text-primary-800 md:tracking-widest tracking-normal '>
              Tokenomics
            </Heading>
          </aside>
          <div
            style={{ borderRadius: "40px 40px 40px 40px" }}
            className='md:p-12 p-4 w-full justify-self-start flex flex-col items-start justify-end border-2 border-white rounded-t-3xl pt-8  bg-dark-800 '
          >
            <div>
              <SmText className='text-white font-bold mb-4'>
                What is Nutgain?
              </SmText>
              <SmText className='text-white py-4'>
                NutGain is an exciting smart contract that guarantees steady
                BUSD rewards to holders. NutGain is also Hyper Deflationary
                Ensuring BUSD Reflections on every transaction.{" "}
              </SmText>
              <SmText className='text-white py-4'>
                NutGain Token constitutes the ecosystem’s unique crytopcurrency.
                After receiving pay-outs for their use of the NutGain Browser
                and for holding the e-commerce offers available only to the
                NutGain community.
              </SmText>
              <div className='flex flex-col  gap-8 '>
                <div className='flex  md:flex-row flex-col items-center '>
                  <img src={coin} alt='web3 browser ' className='h-20 w-20' />
                  <SmText className='text-primary-800 font-bold'>
                    Passive income in BUSD{" "}
                  </SmText>
                </div>
                <div className='flex  md:flex-row flex-col items-center '>
                  <img src={box} alt='web3 browser ' className='h-20 w-20' />
                  <SmText className='text-primary-800 font-bold'>
                    Powered by cutting-edge products
                  </SmText>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ./second div containig squ img and trading view box */}
        <div className='flex flex-col   gap-4 md:transform transform-none -translate-x-20 mb-12'>
          <img src={squ} alt='nutgain ' className=' h-96 w-full mx-8' />
          <div className=' grid grid-cols-2 items-center content-center overflow-none object-fit '>
            <div></div>
            <div className='grid grid-cols-2  justify-between justify-items-center px-4 py-4 '>
              <SmText className='text-gray-100 px-4 w-full text-center'>
                Buy Fee
              </SmText>
              <SmText className='text-gray-100 px-4 w-full text-center'>
                Sell Fee
              </SmText>
            </div>
          </div>
          {/* 
          card 1 */}
          <div
            className='shadow-new-2 grid grid-cols-2 items-center content-center  object-fit  bg-white'
            style={{ borderRadius: "60px 0px 60px 0px" }}
          >
            <div
              style={{
                borderRadius: "60px 0px 0px 0px",
                clipPath: "polygon(0 0, 97% 0, 90% 100%, 0% 100%)",
              }}
              className='bg-primary-800'
            >
              <SmText className='text-gray-900 md:px-8 px-2 py-4 '>
                Liquidity Pool
              </SmText>
            </div>
            <div className='grid grid-cols-2 divide-x justify-between justify-items-center px-4 py-4'>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                2.25%
              </SmText>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                4.5%
              </SmText>
            </div>
          </div>
          {/* 
          card 2 */}
          <div
            className='shadow-new-2 grid grid-cols-2 items-center content-center  object-fit  bg-white'
            style={{ borderRadius: "60px 0px 60px 0px" }}
          >
            <div
              style={{
                borderRadius: "60px 0px 0px 0px",
                clipPath: "polygon(0 0, 97% 0, 90% 100%, 0% 100%)",
              }}
              className='bg-primary-800'
            >
              <SmText className='text-gray-900 md:px-8 px-2 py-4 '>
                Product Development
              </SmText>
            </div>
            <div className='grid grid-cols-2 divide-x justify-between justify-items-center px-4 py-4'>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                4.25%
              </SmText>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                6.25%
              </SmText>
            </div>
          </div>
          {/* 
          card 3 */}
          <div
            className='shadow-new-2 grid grid-cols-2 items-center content-center  object-fit  bg-white'
            style={{ borderRadius: "60px 0px 60px 0px" }}
          >
            <div
              style={{
                borderRadius: "60px 0px 0px 0px",
                clipPath: "polygon(0 0, 97% 0, 90% 100%, 0% 100%)",
              }}
              className='bg-primary-800'
            >
              <SmText className='text-gray-900 md:px-8 px-2 py-4 '>
                Redistribution
              </SmText>
            </div>
            <div className='grid grid-cols-2 divide-x justify-between justify-items-center px-4 py-4'>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                5.5%
              </SmText>
              <SmText className='text-gray-900 px-4 w-full text-center'>
                4.25%
              </SmText>
            </div>
          </div>
        </div>
      </div>
      <PieChart />
      <Percentage />
    </div>
  );
};

export default ProjectTimeline;

const data = [
  {
    title: "Quarter 1",
    year: "2022",
    info: ["IDO (PinkSale)", "Listing on PancakeSwap"],
    icon: cha3,
  },
  {
    title: "Quarter 2",
    year: "",
    info: ["Listing on other ", "DEX"],
    icon: cha3,
  },
  {
    title: "Quarter 3",
    year: "",
    info: ["Listing on Centralized Exchange (Binance)"],
    icon: cha3,
  },
  {
    title: "Quarter 4",
    year: "2023",
    info: ["Listing on other Centralized Exchanges"],
    icon: cha3,
  },
];
