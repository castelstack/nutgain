import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { Heading, SmText, SubText } from "../../constant/styles/text";

import { ScrollDot, ScrollDotUp } from "../../constant/layout/animateOnScroll";

import dot from "../../assets/svg/dot.svg";
import LineDot from "../../assets/svg/LineDot.svg";
import LineVertical from "../../assets/svg/LineVertical.svg";
import noTick from "../../assets/svg/noTick.svg";
import tick from "../../assets/svg/tick.svg";
const style = {
  clipPath: "polygon(0 0, 95% 0, 80% 100%, 0% 100%)",
};
const Time = () => {
  const BoxUI = (title, subTitle, array, Heading, index) => {
    return (
      <>
        <div className={`grid grid-cols-1 w-full gap-4`}>
          <div
            style={{ borderRadius: "60px 0px 60px 0px", display: "flex" }}
            className="mb-8 shadow-new-1 relative d-flex"
          >
            <div
              style={{
                borderRadius: "60px 0px 0px 0px",
                background: "#141414",
              }}
              className="bg-dark-700 h-full w-40 flex items-center justify-center"
            >
              <div>
                <SubText className="text-white tracking-wider lg:text-3xl md:text-xl ">
                  {title}
                </SubText>
                <SmText className=" text-white text-center text-base font-bold ">
                  {subTitle}
                </SmText>
              </div>
            </div>
            <div className="p-10">
              {array.map((el) => (
                <div key={el.id} className="flex flex-col  p-1">
                  <h5 className="text-base font-prime text-white px-1 flex items-center">
                    {el.verified ? (
                      <img
                        src={tick}
                        alt="nutgain logo"
                        className="h-6 w-6 mr-5"
                      />
                    ) : (
                      <img
                        src={noTick}
                        alt="nutgain logo"
                        className="h-6 w-6 mr-5"
                      />
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p
                      key={el}
                      className="ml-14 font-prime text-sm rounded text-gray-500 "
                    >
                      &bull; {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const BoxRow = (
    title1,
    date1,
    title2,
    date2,
    array,
    phase1,
    phase2,
    phase3,
    phase4,
    phase5
  ) => {
    return (
      <div className={`grid grid-cols-1 w-full gap-4`}>
        <div
          style={{ borderRadius: "60px 0px 60px 0px", display: "flex" }}
          className="mb-8 shadow-new-1 relative d-flex"
        >
          <div
            style={{
              borderRadius: "60px 0px 0px 0px",
              background: "#141414",
              // width: "20%",
            }}
            className="bg-dark-700 h-full w-40 flex items-center justify-center"
          >
            <div>
              <SubText className="text-white tracking-wider lg:text-3xl md:text-xl ">
                {title1}
              </SubText>
              <SmText className=" text-white text-center text-base font-bold ">
                {date1}
              </SmText>
              <SmText className=" text-white text-center text-base font-bold ">
                {" -"}
              </SmText>
              <SubText className="text-white tracking-wider lg:text-3xl md:text-xl ">
                {title2}
              </SubText>
              <SmText className=" text-white text-center text-base font-bold ">
                {date2}
              </SmText>
            </div>
          </div>
          {phase5 ? (
            <>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase1}
                </p>
                {array.quarterOne.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase2}
                </p>
                {array.quarterTwo.map((el) => BoxCol(el))}
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase3}
                </p>
                {array.quarterThree.map((el) => BoxCol(el))}
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase4}
                </p>
                {array.quarterFour.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase4}
                </p>
                {array.quarterFive.map((el) => BoxCol(el))}
              </div>
            </>
          ) : phase4 ? (
            <>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase1}
                </p>
                {array.quarterOne.map((el) => BoxCol(el))}
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase2}
                </p>
                {array.quarterTwo.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase3}
                </p>
                {array.quarterThree.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase4}
                </p>
                {array.quarterFour.map((el) => BoxCol(el))}
              </div>
            </>
          ) : (
            <>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase1}
                </p>
                {array.quarterOne.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase2}
                </p>
                {array.quarterTwo.map((el) => BoxCol(el))}
              </div>
              <div className="p-10" style={{ width: "28%" }}>
                <p className="text-primary-800  text-sm font-prime font-bold ">
                  {phase3}
                </p>
                {array.quarterThree.map((el) => BoxCol(el))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const BoxCol = (el) => {
    return (
      <div key={el.id} className="flex flex-col  p-1">
        <h5 className="text-base font-prime text-white px-1 flex items-center">
          {el.verified ? (
            <img src={tick} alt="nutgain logo" className="h-6 w-6 mr-5" />
          ) : (
            <img src={noTick} alt="nutgain logo" className="h-6 w-6 mr-5" />
          )}{" "}
          {el.desc}
        </h5>
        {el.subDesc.map((el) => (
          <p
            key={el}
            className="ml-14 font-prime text-sm rounded text-gray-500 "
          >
            &bull; {el}
          </p>
        ))}
      </div>
    );
  };

  const HeadingFtn = (Heading, index) => {
    return (
      <div>
        <p className="text-white text-center text-base font-bold block">
          {index}
        </p>
        <p className="text-white sm:text-xl font-prime text-center text-base font-bold py-6 ">
          {Heading}
        </p>
      </div>
    );
  };
  return (
    <div
      style={{ background: "#1D1D1D" }}
      className={`${paddingX} bg-dark-800 hidden md:flex flex-col py-12 `}
    >
      <Heading className="text-primary-800 font-bold mb-2">
        Product Timelines
      </Heading>
      <div style={{ position: "relative" }}>
        <p className="dot" />
        <div
          style={{
            background: ` url(${LineDot})`,
            height: "1px",
            position: "absolute",
            top: "20px",
            width: "100%",
          }}
        />{" "}
        <div
          style={{
            background: ` url(${LineVertical})`,
            width: "1px",
            position: "absolute",
            top: "20px",
            right: "0px",
            height: "450px",
          }}
        />
        <div
          className={`${paddingX} grid md:grid-cols-2 grid-cols-1 w-full gap-12 `}
        >
          {HeadingFtn("NFT Marketplace", "1")}
          {HeadingFtn("DeFi Exchange", "2")}
        </div>
      </div>

      <div
        className={`${paddingX} grid md:grid-cols-2 grid-cols-1 w-full gap-12`}
      >
        {BoxUI("Q1", "2022", data[0].quarterOne, "NFT Marketplace", "1")}
        {/* second card */}
        {BoxUI("Q1 - Q2", "2022", data[1].quarterOne, "DeFi Exchange", "2")}
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: ` url(${LineDot})`,
            height: "1px",
            position: "absolute",
            top: "20px",
            width: "100%",
          }}
        />
        <div
          style={{
            background: ` url(${LineVertical})`,
            width: "1px",
            position: "absolute",
            top: "20px",
            height: "487px",
          }}
        />
        <div
          className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12 `}
        >
          {HeadingFtn("ZOR Web 3.0", "3")}
        </div>
      </div>

      <div
        className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12`}
      >
        {BoxRow(
          "Q1",
          "2022",
          "Q2",
          "2023",
          data[2],
          "Phase 1 (Q1, 2022)",
          "Phase 2 (Q2, 2022)",
          "Phase 3 (Q3 2022)",
          "Phase 4 (Q1, 2023)",
          "Phase 5 (Q2 2023)"
        )}
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: ` url(${LineDot})`,
            height: "1px",
            position: "absolute",
            top: "20px",
            width: "100%",
          }}
        />
        <div
          style={{
            background: ` url(${LineVertical})`,
            width: "1px",
            position: "absolute",
            top: "20px",
            right: "0px",
            height: "350px",
          }}
        />
        <div
          className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12 `}
        >
          {HeadingFtn("DeFi Wallets", "4")}
        </div>
      </div>
      <div
        className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12`}
      >
        {BoxRow(
          "Q4",
          "2022",
          "Q3",
          "2023",
          dataTwo[0],
          "Phase 1 (Q3, 2022)",
          "Phase 2 (Q4, 2022)",
          "Phase 3 (Q1, 2023)"
        )}
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: ` url(${LineDot})`,
            height: "1px",
            position: "absolute",
            top: "20px",
            right: "0px",
            width: "50%",
          }}
        />
        <div
          className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12 `}
        >
          {HeadingFtn("Decentralized Hyper E-commerce", "5")}
        </div>
      </div>
      <div
        className={`${paddingX} grid md:grid-cols-1 grid-cols-1 w-full gap-12`}
      >
        {BoxRow(
          "Q4",
          "2022",
          "Q3",
          "2023",
          dataTwo[1],
          "Phase 1 (Q4, 2022)",
          "Phase 2 (Q1, 2023)",
          "Phase 3 (Q2, 2023)",
          "Phase 4 (Q3, 2023)"
        )}
      </div>
    </div>
  );
};
export default Time;

// mock data
const quarterOne = [
  {
    id: 12,
    verified: true,
    desc: "UI & Domain Finalization",
    subDesc: [],
  },
  {
    id: 2,
    verified: true,
    desc: "UX Development",
    subDesc: [],
    // subDesc: [
    //   "Swap & Liquidity",
    //   "Smart Contract Development",
    //   "Yield Farming Integration",
    //   "Staking Integration",
    //   "  Spin & Win",
    // ],
  },
  {
    id: 124,
    verified: false,
    desc: "Initiation of Product Development",
    subDesc: [],
  },
  {
    id: 124,
    verified: false,
    desc: "Deployment & Testing on Test Bed",
    subDesc: [],
  },
  {
    id: 124,
    verified: false,
    desc: "Go-live on 28th Feb 2022",
    subDesc: [],
  },
];

const data = [
  // first
  {
    id: 1,
    day: "01",
    title: "NFT Marketplace",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: true,
        desc: "UI & Domain Finalization",
        subDesc: [],
      },
      {
        id: 2,
        verified: true,
        desc: "UX Development",
        subDesc: [],
        // subDesc: [
        //   "Swap & Liquidity",
        //   "Smart Contract Development",
        //   "Yield Farming Integration",
        //   "Staking Integration",
        //   "  Spin & Win",
        // ],
      },
      {
        id: 124,
        verified: false,
        desc: "Initiation of Product Development",
        subDesc: [],
      },
      {
        id: 124,
        verified: false,
        desc: "Deployment & Testing on Test Bed",
        subDesc: [],
      },
      {
        id: 124,
        verified: false,
        desc: "Go-live on 28th Feb 2022",
        subDesc: [],
      },
    ],
    quarterTwo: [],

    quarterThree: [],
    quarterFour: [],
    quarterFive: [],
  },
  {
    id: 2,
    day: "02",
    title: "DeFi Exchange",
    year: 2020,

    quarterOne: [
      {
        id: 1,
        verified: true,
        desc: "UI & Domain Finalization",
        subDesc: [],
      },
      {
        id: 12,
        verified: false,
        desc: "Initiation of Product Developmen",
        subDesc: [
          "Swap & Liquidity",
          "Smart Contract Development",
          "Yield Farming Integration",
          "Staking Integration",
          "Spin & Win",
        ],
      },
      {
        id: 212,
        verified: false,
        desc: "Interface and back end development",
        subDesc: [],
      },
      {
        id: 111,
        verified: false,
        desc: "Deployment & Testing on Test Bed",
        subDesc: [],
      },
      {
        id: 121,
        verified: false,
        desc: "Go-live on 13th July 2022",
        subDesc: [],
      },
    ],
    quarterTwo: [],
    quarterThree: [],
    quarterFour: [],
    quarterFive: [],
  },
  {
    id: 3,
    day: "03",
    title: "ZOR Web 3.0",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: true,
        desc: "Finalizing the Web 3.0 Functionalities",
        subDesc: [
          "Firewall",
          "Web Protection",
          "Zor Connect – Audio / Chat / Video",
          "Secured VPN",
          "Play to Earn Games",
        ],
      },
      {
        id: 2,
        verified: true,
        desc: "UI & Domain Finalization",
        subDesc: [],
      },
      {
        id: 124,
        verified: false,
        desc: "Conceptualization of Metaverse",
        subDesc: [],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: false,
        desc: "Deployment & Testing on Test Bed",
        subDesc: [],
      },
      // {
      //   id: 24,
      //   verified: true,
      //   desc: "Go-live on 13th July 2022",
      //   subDesc: [],
      // },
    ],
    quarterThree: [
      {
        id: 111,
        verified: false,
        desc: "Beta Version Release 11th Sep 2022",
        subDesc: [],
      },
    ],
    quarterFour: [
      {
        id: 1189981,
        verified: false,
        desc: "Go-live on 28th Feb 2023",
        subDesc: [],
      },
    ],
    quarterFive: [
      {
        id: 118765561,
        verified: false,
        desc: "Creation of 3D Virtual Environments",
        subDesc: [],
      },
      {
        id: 118765561,
        verified: false,
        desc: "Creation of NFTs for Metaverse",
        subDesc: [],
      },
      {
        id: 118765561,
        verified: false,
        desc: "Integration of Metaverse with Web 3.0",
        subDesc: [],
      },
      {
        id: 118765561,
        verified: false,
        desc: "VR Testing",
        subDesc: [],
      },
      {
        id: 118765561,
        verified: false,
        desc: "Release Web 3.0 with Metaverse",
        subDesc: [],
      },
      {
        id: 118765561,
        verified: false,
        desc: "Application Programming interfaces (APIs) for interfacing with VR and AR devices with OpenXR",
        subDesc: [],
      },
    ],
  },
];

// data for mock
const dataTwo = [
  // first
  {
    id: 1,
    day: "04",
    title: "DeFi Wallet",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: false,
        desc: "Development Server Set up",
        subDesc: [],
      },
      {
        id: 2,
        verified: false,
        desc: "Integration with BTC,ETH & BEP",
        subDesc: [],
      },
      {
        id: 124,
        verified: false,
        desc: "Deployment of Nodes",
        subDesc: [],
      },
      {
        id: 125,
        verified: false,
        desc: "Functional Flow of Wallet",
        subDesc: [],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: false,
        desc: "Live Trading",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Swap Functionality",
        subDesc: [],
      },
      {
        id: 11134,
        verified: false,
        desc: "Mobile App Development (Android & IOS)",
        subDesc: [],
      },
      {
        id: 24566,
        verified: false,
        desc: "Other Exchange Integration",
        subDesc: [],
      },
    ],
    quarterThree: [
      {
        id: 111,
        verified: false,
        desc: "Deployment & Testing on Test Bed",
        subDesc: [],
      },

      {
        id: 15,
        verified: false,
        desc: "Go-live on 31th Jan 2023",
        subDesc: [],
      },
    ],
    quarterFour: [],
    quarterFive: [],
  },
  {
    id: 2,
    day: "05",
    title: "Decentralized Hyper Ecommerce",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: false,
        desc: "UI/UX Development",
        subDesc: [],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: false,
        desc: "Backend Integration",
        subDesc: [],
      },
    ],
    quarterThree: [
      {
        id: 2400,
        verified: false,
        desc: "Customer Portal",
        subDesc: [],
      },
      {
        id: 111,
        verified: false,
        desc: "Merchant Portal",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Product Listing",
        subDesc: [],
      },
    ],
    quarterFour: [
      {
        id: 111,
        verified: false,
        desc: "Integration with various wallets",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Deployment",
        subDesc: [],
      },
      {
        id: 11,
        verified: false,
        desc: "Beta Version Release",
        subDesc: [],
      },
    ],
    quarterFive: [],
  },
];
