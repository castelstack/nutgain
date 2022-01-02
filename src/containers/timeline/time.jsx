import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { Heading, SmText } from "../../constant/styles/text";

const style = {
  clipPath: "polygon(0 0, 95% 0, 80% 100%, 0% 100%)",
};
const Time = () => {
  return (
    <div className={`${paddingX} bg-dark-900 hidden md:flex flex-col `}>
      <div className='py-12'>
        <Heading className='text-primary-800 font-bold mb-2'>
          Product Timeline
        </Heading>
        <div className='grid grid-cols-max-fr content-stretch items-stretch '>
          <div className='grid grid-rows-2 content-center py-12 gap-4 items-start mr-4'>
            <div>
              <Heading className='text-white tracking-wider '>01</Heading>
              <SmText className='text-primary-800 text-base font-bold mb-4'>
                DeFi Exchange
              </SmText>
            </div>
            <div>
              <Heading className='text-white tracking-wider '>02</Heading>
              <SmText className='text-primary-800 text-base font-bold mb-4'>
                DeFi Exchange
              </SmText>
            </div>
          </div>
          <div className='flex content-center items-stretch'>
            {data.map((el, idx) => (
              <div
                key={el.id}
                className='grid grid-cols-1 items-stretch gap-4 w-full  '
              >
                <div className='flex flex-col items-start w-full gap-4 border-b-2 border-l-2 border-gray-100 my-4 self-stretch ' style={{
                    height: '80vh'
                }}>
                  <div className=' px-6 w-full py-3 bg-dark-700' style={style}>
                    <SmText className='text-white ' style={style}>
                      {el.title}
                    </SmText>
                  </div>
                  <div className='grid grid-rows-2  gap-4 items-start  max-h-96'>
                    <div className='flex flex-col gap-2 px-4 py-2 justify-items-start justify-content-start'>
                      {el.info.map((el) => (
                        <div key={el.id}>
                          <SmText className='text-base text-white font-bold'>
                            {el.desc}
                          </SmText>
                          {el.subDesc.map((el) => (
                            <p
                              key={el}
                              className='ml-4 text-sm rounded text-gray-500 '
                            >
                              {el}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className='flex flex-col gap-2 px-4 py-4 justify-items-start max-h-96'>
                      {el.info2.map((el) => (
                        <div key={el.id}>
                          <SmText className='text-base text-white font-bold'>
                            {el.desc}
                          </SmText>
                          {el.subDesc.map((el) => (
                            <p
                              key={el}
                              className='ml-4 text-sm rounded text-gray-500 '
                            >
                              {el}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='h-4 flex self-start rounded-md'>
                  {el.year ? (
                    <SmText className='self-start rounded-md text-white border-2 border-white px-3 py-1'>
                      {el.year}
                    </SmText>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* // second product timeline */}

      <div className='py-12'>
        <Heading className='text-primary-800 font-bold mb-2'>
          Product Timeline
        </Heading>
        <div className='grid grid-cols-max-fr  items-stretch'>
        <div className='grid grid-rows-2 content-center py-12 gap-4 items-start mr-4'>
            <div>
              <Heading className='text-white tracking-wider '>03</Heading>
              <SmText className='text-primary-800 text-base font-bold mb-4'>
                DeFi Exchange
              </SmText>
            </div>
            <div>
              <Heading className='text-white tracking-wider '>04</Heading>
              <SmText className='text-primary-800 text-base font-bold mb-4'>
                DeFi Exchange
              </SmText>
            </div>
          </div>
          <div className='flex'>
            {data2.map((el, idx) => (
              <div
                key={el.id}
                className='grid grid-cols-1 items-start gap-4 w-full  '
              >
                <div className='flex flex-col items-start w-full gap-4 border-b-2 border-l-2 border-gray-100 my-4  ' style={{
                    height: '60vh'
                }}>
                  <div className=' px-6 w-full py-3 bg-dark-700' style={style}>
                    <SmText className='text-white ' style={style}>
                      {el.title}
                    </SmText>
                  </div>
                  <div className='grid grid-rows-2  gap-4 items-start '>
                    <div className='flex flex-col gap-2 px-4 py-2 justify-items-start justify-content-start max-h-96'>
                      {el.info.map((el) => (
                        <div key={el.id} className=''>
                          <SmText className='text-base text-white font-bold'>
                            {el.desc}
                          </SmText>
                          {el.subDesc.map((el) => (
                            <p
                              key={el}
                              className='ml-4 text-sm rounded text-gray-500 '
                            >
                              {el}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className='flex flex-col gap-2 px-4 py-4 justify-items-start max-h-20'>
                      {el.info2.map((el) => (
                        <div key={el.id} className=''>
                          <SmText className='text-base text-white font-bold'>
                            {el.desc}
                          </SmText>
                          {el.subDesc.map((el) => (
                            <p
                              key={el}
                              className='ml-4 text-sm rounded text-gray-500 '
                            >
                              {el}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='h-4 flex self-start rounded-md'>
                  {el.year ? (
                    <SmText className='self-start rounded-md text-white border-2 border-white px-3 py-1'>
                      {el.year}
                    </SmText>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// mock data
const data = [
  // first
  {
    id: 1,
    title: "Quarter 1",
    year: 2020,

    info: [
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
        subDesc: [
          "swap",
          "smart contarct",
          "yield farming",
          "integration",
        ],
      },
    ],
    info2: [
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
        subDesc: [
          "swap",
          "smart contarct",
          "yield farming",
        ],
      },
    ],
  },
  //   2nd
  {
    id: 277,
    title: "Quarter 2",
    year: 2022,

    info: [
      {
        id: 18643,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 256,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: []
      },
    ],
    info2: [
      {
        id: 1670,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 333,
        verified: false,
        desc: "Ui & Domain Finalization 3",
        subDesc: [],
      },
    ],
  },
  //   3rd
  {
    id: 377,
    title: "Quarter 3",
    year: "",

    info: [
      { id: 191, verified: false, desc: "", subDesc: [] },
      { id: 2222, verified: false, desc: "", subDesc: [] },
      { id: 3323, verified: false, desc: "", subDesc: [] },
    ],
    info2: [
      {
        id: 1112,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
    ],
  },
   //   4th
   {
    id: 3774,
    title: "Quarter 3",
    year: "",

    info: [
      { id: 191, verified: false, desc: "", subDesc: [] },
      { id: 2222, verified: false, desc: "", subDesc: [] },
      { id: 3323, verified: false, desc: "", subDesc: [] },
    ],
    info2: [
      {
        id: 1112,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
    ],
  },
   //   5rd
   {
    id: 3777,
    title: "Quarter 3",
    year: "",

    info: [
      { id: 191, verified: false, desc: "", subDesc: [] },
      { id: 2222, verified: false, desc: "", subDesc: [] },
      { id: 3323, verified: false, desc: "", subDesc: [] },
    ],
    info2: [
      {
        id: 1112,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
      {
        id: 2221,
        verified: false,
        desc: "Ui & Domain Finalization",
        subDesc: [
        ],
      },
      {
        id: 33341,
        verified: false,
        desc: "Ui & Domain Finalization 3",
        subDesc: [],
      },
      {
        id: 1112,
        verified: false,
        desc: "Ui & Domain Finalization 1",
        subDesc: [],
      },
    ],
  },
];
// mock data
const data2 = [
    // first
    {
      id: 1,
      title: "Quarter 1",
      year: 2020,
  
      info: [
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
          subDesc: [],
        },
        {
          id: 13,
          verified: false,
          desc: "Ui & Domain Finalization 3",
          subDesc: [],
        },
      ],
      info2: [
      ],
    },
    //   2nd
    {
      id: 277,
      title: "Quarter 2",
      year: '',
  
      info: [
        {
          id: 18643,
          verified: false,
          desc: "Ui & Domain Finalization 1",
          subDesc: [],
        },
        {
          id: 256,
          verified: false,
          desc: "Ui & Domain Finalization",
          subDesc: [
          ],
        },
        {
          id: 3223,
          verified: false,
          desc: "Ui & Domain Finalization 3",
          subDesc: [],
        },
      ],
      info2: [
        {
          id: 1670,
          verified: false,
          desc: "Ui & Domain Finalization 1",
          subDesc: [],
        },
      ],
    },
    //   3rd
    {
      id: 377,
      title: "Quarter 3",
      year: "2024",
  
      info: [
        { id: 191, verified: false, desc: "", subDesc: [] },
        { id: 2222, verified: false, desc: "", subDesc: [] },
        { id: 3323, verified: false, desc: "", subDesc: [] },
      ],
      info2: [
        {
          id: 1112,
          verified: false,
          desc: "Ui & Domain Finalization 1",
          subDesc: [],
        },
      ],
    },
     //   3rd
     {
      id: 3774,
      title: "Quarter 3",
      year: "",
  
      info: [
        { id: 191, verified: false, desc: "", subDesc: [] },
        { id: 2222, verified: false, desc: "", subDesc: [] },
        { id: 3323, verified: false, desc: "", subDesc: [] },
      ],
      info2: [
        {
          id: 1112,
          verified: false,
          desc: "Ui & Domain Finalization 1",
          subDesc: [],
        },
        {
          id: 2221,
          verified: false,
          desc: "Ui & Domain Finalization",
          subDesc: [
          ],
        },
        {
          id: 33341,
          verified: false,
          desc: "Ui & Domain Finalization 3",
          subDesc: [],
        },
      ],
    },
     //   5rd
     {
      id: 3777,
      title: "Quarter 3",
      year: "",
  
      info: [
        { id: 191, verified: false, desc: "", subDesc: [] },
        { id: 2222, verified: false, desc: "", subDesc: [] },
        { id: 3323, verified: false, desc: "", subDesc: [] },
      ],
      info2: [
        {
          id: 1112,
          verified: false,
          desc: "Ui & Domain Finalization 1",
          subDesc: [],
        },
        {
          id: 2221,
          verified: false,
          desc: "Ui & Domain Finalization",
          subDesc: [
          ],
        },
        {
          id: 33341,
          verified: false,
          desc: "Ui & Domain Finalization 3",
          subDesc: [],
        },
      ],
    },
  ];
export default Time;
