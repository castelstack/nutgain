import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { Heading, SmText } from "../../constant/styles/text";

const style = {
  clipPath: "polygon(0 0, 95% 0, 80% 100%, 0% 100%)",
};
const Time = () => {
  return (
    <div className={`${paddingX} bg-dark-900 hidden md:flex flex-col py-12 `}>
      <Heading className='text-primary-800 font-bold mb-2'>
        Product Timeline
      </Heading>

      <div className='grid gird-cols-1  w-full'>
        {data.map((el) => (
          <div key={el.id} className='flex  items-stretch   '>
            <div className='flex-col flex px-6'>
              <Heading className='text-white tracking-wider '>{el.day}</Heading>
              <SmText className='text-primary-800 text-base font-bold '>
                {el.title}
              </SmText>
            </div>

            <div className='w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch'>
              <div
                key={el}
                className=' px-6 w-full py-3 bg-dark-700 mb-2'
                style={style}
              >
                <SmText className='text-white ' style={style}>
                  Quater 1
                </SmText>
              </div>
              {el.quarterOne.map((el) => (
                <div key={el.id} className='flex flex-col  p-1'>
                  <h5 className='text-sm text-white font-bold px-1'>
                    {el.verified ? (
                      <i
                        class='fa fa-check-circle text-base text-green-400'
                        aria-hidden='true'
                      ></i>
                    ) : (
                      <i
                        class='fa fa-check-circle text-base text-gray-800'
                        aria-hidden='true'
                      ></i>
                    )}{" "}
                    {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className='ml-4 text-sm rounded text-gray-500 '>
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className='w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch'>
              <div
                key={el}
                className=' px-6 w-full py-3 bg-dark-700 mb-2'
                style={style}
              >
                <SmText className='text-white ' style={style}>
                  Quater 2
                </SmText>
              </div>
              {el.quarterTwo.map((el) => (
                <div key={el.id} className='flex flex-col  p-1'>
                  {
                    el.dec? 
                  <h5 className='text-sm text-white font-bold px-1'>
                   {el.verified ? (
                      <i
                        class='fa fa-check-circle text-base text-green-400'
                        aria-hidden='true'
                      ></i>
                    ) : (
                      <i
                        class='fa fa-check-circle text-base text-gray-800'
                        aria-hidden='true'
                      ></i>
                    )}{" "} {el.desc}
                  </h5>: ''
                  }
                  {el.subDesc.map((el) => (
                    <p key={el} className='ml-4 text-sm rounded text-gray-500 '>
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className='w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch'>
              <div className=' px-6 w-full py-3 bg-dark-700 mb-2' style={style}>
                <SmText className='text-white ' style={style}>
                  Quater 3
                </SmText>
              </div>
              {el.quarterThree.map((el) => (
                <div key={el.id} className='flex flex-col '>
                  <h5 className='text-sm text-white font-bold px-1'>
                   {el.verified ? (
                      <i
                        class='fa fa-check-circle text-base text-green-400'
                        aria-hidden='true'
                      ></i>
                    ) : (
                      <i
                        class='fa fa-check-circle text-base text-gray-800'
                        aria-hidden='true'
                      ></i>
                    )}{" "} {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className='ml-4 text-sm rounded text-gray-500 '>
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className='w-full   border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch'>
              <div className=' px-6 w-full py-3 bg-dark-700 mb-2' style={style}>
                <SmText className='text-white ' style={style}>
                  Quater 4
                </SmText>
              </div>
              {el.quarterFour.map((el) => (
                <div key={el.id} className='flex flex-col '>
                  <h5 className='text-sm text-white font-bold px-1'>
                   {el.verified ? (
                      <i
                        class='fa fa-check-circle text-base text-green-400'
                        aria-hidden='true'
                      ></i>
                    ) : (
                      <i
                        class='fa fa-check-circle text-base text-gray-800'
                        aria-hidden='true'
                      ></i>
                    )}{" "} {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className='ml-4 text-sm rounded text-gray-500 '>
                      {el}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className=' w-full  border-b-2 border-l-2 border-gray-100 pb-6  justify-self-stretch '>
              <div className=' px-6 w-full py-3 bg-dark-700 mb-2' style={style}>
                <SmText className='text-white ' style={style}>
                  Quater 5
                </SmText>
              </div>
              {el.quarterFive.map((el) => (
                <div key={el.id} className='flex flex-col '>
                  <h5 className='text-sm text-white font-bold px-1'>
                   {el.verified ? (
                      <i
                        class='fa fa-check-circle text-base text-green-400'
                        aria-hidden='true'
                      ></i>
                    ) : (
                      <i
                        class='fa fa-check-circle text-base text-gray-800'
                        aria-hidden='true'
                      ></i>
                    )}{" "} {el.desc}
                  </h5>
                  {el.subDesc.map((el) => (
                    <p key={el} className='ml-4 text-sm rounded text-gray-500 '>
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
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 2,
        verified: true,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming", "integration"],
      },
      {
        id: 124,
        verified: true,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 27,
        verified: true,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming", "integration"],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: true,
        desc: "",
        subDesc: [],
      },
      {
        id: 24,
        verified: true,
        desc: "",
        subDesc: [],
      },
    ],
    quarterThree: [
      {
        id: 111,
        verified: true,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: true,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
    quarterFour: [
      {
        id: 111,
        verified: true,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
    quarterFive: [
      {
        id: 111,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
  },
  {
    id: 2,
    day: "02",
    title: "DeFi Exchange",
    year: 2020,

    quarterOne: [
      {
        id: 12,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 2,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming", "integration"],
      },
    ],
    quarterTwo: [
      {
        id: 111,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
    quarterThree: [
      {
        id: 111,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
    quarterFour: [
      {
        id: 111,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
    quarterFive: [
      {
        id: 111,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 24,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: ["swap", "smart contarct", "yield farming"],
      },
    ],
  },
];
