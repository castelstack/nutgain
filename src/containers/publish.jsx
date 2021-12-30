import React from "react";
import { SubText, SmText } from "../constant/styles/text";
import pb1 from "../assets/svg/pb1.svg";
import pb2 from "../assets/svg/pb2.svg";
import pb3 from "../assets/svg/pb3.svg";
import pb5 from "../assets/svg/pb5.svg";
import pb6 from "../assets/svg/pb6.svg";
import yahoo from "../assets/svg/yahoo.svg";
import pre from "../assets/svg/pre.svg";
import { paddingX } from "../constant/styles/spacing";

const Publish = () => {
  return (
    <div className=' pt-12 bg-primary-800 flex flex-col gap-12'>
      <div className={`${paddingX} flex  items-start gap-12 justify-between`}>
        {company.map((el) => (
          <div key={el.position} className='flex flex-col justify-items-center'>
            <img src={el.image} alt='zor' className='h-32 w-32' />
            <SmText className='text-gray-900 font-bold'>company name</SmText>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-20 justify-self-end'>
        <SubText className='w-96 sm:pl-24 pl-4 flex text-gray-900'>
          Published By
        </SubText>
        <div className='flex justify-evenly bg-white w-full py-8' style={{clipPath: 'polygon(22% 0, 100% 0%, 100% 98%, 0% 100%)'}}>
          <img src={yahoo} alt='zor' className='h-32 w-32' />
          <img src={pre} alt='zor' className='h-32 w-32' />
        </div>
      </div>
    </div>
  );
};

const company = [
  {
    image: pb1,
    position: "CEO",
  },
  {
    image: pb2,
    position: "CFO",
  },
  {
    image: pb3,
    position: "COO",
  },
  {
    image: pb5,
    position: "CFO",
  },
  {
    image: pb6,
    position: "COO",
  },
];

export default Publish;
