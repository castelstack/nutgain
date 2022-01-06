import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { Heading, SmText } from "../../constant/styles/text";

const style = {
  clipPath: "polygon(0 0, 95% 0, 80% 100%, 0% 100%)",
};
const Time = () => {
  return (
    <div className={`${paddingX} bg-dark-800 hidden md:flex flex-col py-12 `}>
      <Heading className="text-primary-800 font-bold mb-2">
        Product Timeline
      </Heading>

      <div className="grid gird-cols-1  w-full">
        {data.map((el) => (
          <div key={el.id} className="flex  items-stretch   ">
            <div className="flex-col flex px-1 w-full">
              <Heading className="text-white tracking-wider ">{el.day}</Heading>
              <SmText className="text-primary-800 text-base font-bold ">
                {el.title}
              </SmText>
            </div>

            <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
              <div
                key={el}
                className=" px-6 w-full py-3 bg-dark-700 mb-2"
                style={style}
              >
                <SmText className="text-white " style={style}>
                  Phase 1
                </SmText>
              </div>
              {el.quarterOne.map((el) => (
                <div key={el.id} className="flex flex-col  p-1">
                  <h5 className="text-sm text-white font-bold px-1">
                    {el.verified ? (
                      <i
                        className="fa fa-check-circle text-base text-green-400"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-check-circle text-base text-gray-800"
                        aria-hidden="true"
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className="ml-4 text-sm rounded text-gray-500 ">
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
              <div
                key={el}
                className=" px-6 w-full py-3 bg-dark-700 mb-2"
                style={style}
              >
                <SmText className="text-white " style={style}>
                  Phase 2
                </SmText>
              </div>
              {el.quarterTwo.map((el) => (
                <div key={el.id} className="flex flex-col  p-1">
                  <h5 className="text-sm text-white font-bold px-1">
                    {el.verified ? (
                      <i
                        className="fa fa-check-circle text-base text-green-400"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-check-circle text-base text-gray-800"
                        aria-hidden="true"
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className="ml-4 text-sm rounded text-gray-500 ">
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
              <div className=" px-6 w-full py-3 bg-dark-700 mb-2" style={style}>
                <SmText className="text-white " style={style}>
                  Phase 3
                </SmText>
              </div>
              {el.quarterThree.map((el) => (
                <div key={el.id} className="flex flex-col ">
                  <h5 className="text-sm text-white font-bold px-1">
                    {el.verified ? (
                      <i
                        className="fa fa-check-circle text-base text-green-400"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-check-circle text-base text-gray-800"
                        aria-hidden="true"
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className="ml-4 text-sm rounded text-gray-500 ">
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
              <div className=" px-6 w-full py-3 bg-dark-700 mb-2" style={style}>
                <SmText className="text-white " style={style}>
                  Phase 4
                </SmText>
              </div>
              {el.quarterFour.map((el) => (
                <div key={el.id} className="flex flex-col ">
                  <h5 className="text-sm text-white font-bold px-1">
                    {el.verified ? (
                      <i
                        className="fa fa-check-circle text-base text-green-400"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-check-circle text-base text-gray-800"
                        aria-hidden="true"
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className="ml-4 text-sm rounded text-gray-500 ">
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className=" w-full  border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch ">
              <div className=" px-6 w-full py-3 bg-dark-700 mb-2" style={style}>
                <SmText className="text-white " style={style}>
                  Phase 5
                </SmText>
              </div>
              {el.quarterFive.map((el) => (
                <div key={el.id} className="flex flex-col ">
                  <h5 className="text-sm text-white font-bold px-1">
                    {el.verified ? (
                      <i
                        className="fa fa-check-circle text-base text-green-400"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-check-circle text-base text-gray-800"
                        aria-hidden="true"
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className="ml-4 text-sm rounded text-gray-500 ">
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* second half of project timeline */}
      <div className="my-12">
        <Heading className="text-primary-800 font-bold mb-2">
          Product Timeline
        </Heading>

        <div className="grid gird-cols-1  w-full">
          {dataTwo.map((el) => (
            <div key={el.id} className="flex  items-stretch   ">
              <div className="flex-col flex w-full px-1">
                <Heading className="text-white tracking-wider ">
                  {el.day}
                </Heading>
                <SmText className="text-primary-800 text-base font-bold ">
                  {el.title}
                </SmText>
              </div>

              <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
                <div
                  key={el}
                  className=" px-6 w-full py-3 bg-dark-700 mb-2"
                  style={style}
                >
                  <SmText className="text-white " style={style}>
                    Phase 1
                  </SmText>
                </div>
                {el.quarterOne.map((el) => (
                  <div key={el.id} className="flex flex-col  p-1">
                    <h5 className="text-sm text-white font-bold px-1">
                      {el.verified ? (
                        <i
                          className="fa fa-check-circle text-base text-green-400"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check-circle text-base text-gray-800"
                          aria-hidden="true"
                        ></i>
                      )}{" "}
                      {el.desc}
                    </h5>
                    {el.subDesc.map((el) => (
                      <p
                        key={el}
                        className="ml-4 text-sm rounded text-gray-500 "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
                <div
                  key={el}
                  className=" px-6 w-full py-3 bg-dark-700 mb-2"
                  style={style}
                >
                  <SmText className="text-white " style={style}>
                    Phase 2
                  </SmText>
                </div>
                {el.quarterTwo.map((el) => (
                  <div key={el.id} className="flex flex-col  p-1">
                    <h5 className="text-sm text-white font-bold px-1">
                      {el.verified ? (
                        <i
                          className="fa fa-check-circle text-base text-green-400"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check-circle text-base text-gray-800"
                          aria-hidden="true"
                        ></i>
                      )}{" "}
                      {el.desc}
                    </h5>
                    {el.subDesc.map((el) => (
                      <p
                        key={el}
                        className="ml-4 text-sm rounded text-gray-500 "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
                <div
                  className=" px-6 w-full py-3 bg-dark-700 mb-2"
                  style={style}
                >
                  <SmText className="text-white " style={style}>
                    Phase 3
                  </SmText>
                </div>
                {el.quarterThree.map((el) => (
                  <div key={el.id} className="flex flex-col ">
                    {el.desc === "" ? (
                      ""
                    ) : (
                      <h5 className="text-sm text-white font-bold px-1">
                        {el.verified ? (
                          <i
                            className="fa fa-check-circle text-base text-green-400"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          <i
                            className="fa fa-check-circle text-base text-gray-800"
                            aria-hidden="true"
                          ></i>
                        )}{" "}
                        {el.desc}
                      </h5>
                    )}
                    {el.subDesc.map((el) => (
                      <p
                        key={el}
                        className="ml-4 text-sm rounded text-gray-500 "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch">
                <div
                  className=" px-6 w-full py-3 bg-dark-700 mb-2"
                  style={style}
                >
                  <SmText className="text-white " style={style}>
                    Phase 4
                  </SmText>
                </div>
                {el.quarterFour.map((el) => (
                  <div key={el.id} className="flex flex-col ">
                    <h5 className="text-sm text-white font-bold px-1">
                      {el.verified ? (
                        <i
                          className="fa fa-check-circle text-base text-green-400"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check-circle text-base text-gray-800"
                          aria-hidden="true"
                        ></i>
                      )}{" "}
                      {el.desc}
                    </h5>
                    {el.subDesc.map((el) => (
                      <p
                        key={el}
                        className="ml-4 text-sm rounded text-gray-500 "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className=" w-full  border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch ">
                <div
                  className=" px-6 w-full py-3 bg-dark-700 mb-2"
                  style={style}
                >
                  <SmText className="text-white " style={style}>
                    Phase 5
                  </SmText>
                </div>
                {el.quarterFive.map((el) => (
                  <div key={el.id} className="flex flex-col ">
                    <h5 className="text-sm text-white font-bold px-1">
                      {el.verified ? (
                        <i
                          className="fa fa-check-circle text-base text-green-400"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-check-circle text-base text-gray-800"
                          aria-hidden="true"
                        ></i>
                      )}{" "}
                      {el.desc}
                    </h5>
                    {el.subDesc.map((el) => (
                      <p
                        key={el}
                        className="ml-4 text-sm rounded text-gray-500 "
                      >
                        {el}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Time;

// mock data
const data = [
  // first
  {
    id: 1,
    day: "01",
    title: "DeFi Exchange",
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
        desc: "UI & Domain Finalization",
        subDesc: [
          "Swap & Liquidity",
          "Smart Contract Development",
          "Yield Farming Integration",
          "Staking Integration",
          "  Spin & Win",
        ],
      },
      {
        id: 124,
        verified: true,
        desc: "Conceptualization of Metaverse",
        subDesc: [],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: true,
        desc: "Deployment & Testing on Test Bed",
        subDesc: [],
      },
      {
        id: 24,
        verified: true,
        desc: "Go-live on 13th July 2022",
        subDesc: [],
      },
    ],
    quarterThree: [
      {
        id: 111,
        verified: false,
        desc: "",
        subDesc: [],
      },
    ],
    quarterFour: [
      {
        id: 1189981,
        verified: false,
        desc: "",
        subDesc: [],
      },
    ],
    quarterFive: [
      {
        id: 118765561,
        verified: false,
        desc: "",
        subDesc: [],
      },
    ],
  },
  {
    id: 2,
    day: "02",
    title: "Zor Web 3.0",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: true,
        desc: "Finalizing the Web 3.0 Functionalities",
        subDesc: [
          "Firewall",
          " Web Protection",
          " Zor Connect – Audio / Chat / Video",
          "  Secured VPN",
          " Play to Earn Games",
        ],
      },
      {
        id: 2,
        verified: true,
        desc: "UI & Domain Finalization",
        subDesc: [],
      },
      {
        id: 212,
        verified: true,
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
        id: 244,
        verified: false,
        desc: "Go-live on 28th Feb 2023",
        subDesc: [],
      },
    ],
    quarterFive: [
      {
        id: 111,
        verified: false,
        desc: "Creation of 3D Virtual Environments",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Creation of NFTs for Metaverse",
        subDesc: [],
      },
      {
        id: 11,
        verified: false,
        desc: "Integration of Metaverse with Web 3.0",
        subDesc: [],
      },
      {
        id: 2,
        verified: false,
        desc: "VR Testing",
        subDesc: [],
      },
      {
        id: 101,
        verified: false,
        desc: "Release Web 3.0 with Metaverse",
        subDesc: [],
      },
      {
        id: 244,
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
    day: "03",
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
        verified: "",
        desc: "",
        subDesc: [],
      },
    ],
    quarterFour: [
      {
        id: 115,
        verified: "",
        desc: "",
        subDesc: [],
      },
    ],
    quarterFive: [
      {
        id: 1199,
        verified: "",
        desc: "",
        subDesc: [],
      },
    ],
  },
  {
    id: 2,
    day: "04",
    title: "D-Hyper E-commerce",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: "",
        desc: "",
        subDesc: [],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: false,
        desc: "UI/UX Development",
        subDesc: [],
      },
    ],
    quarterThree: [
      {
        id: 111,
        verified: false,
        desc: "Backend Integration",
        subDesc: [],
      },
    ],
    quarterFour: [
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
    quarterFive: [
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
  },
];
