import React from "react";
import { SmText } from "../../constant/styles/text";

const TimeCard = ({ year, info, title, icon }) => {
  return (
      <div className='flex flex-col items-start gap-4 w-full '>
          <div className='h-4'>

      <SmText className='text-primary-800'>{year}</SmText>
          </div>
          <div className='flex flex-col items-start w-full gap-4 rounded-b-md border-l-2 border-gray-700 py-4'>
      <SmText className='text-white px-6 w-full py-3 bg-dark-800'>
        {title}
      </SmText>
      <div className='flex flex-col gap-2 px-4 '>
        {info.map((el) => (
          <SmText key={el} className='text-primary-800 font-bold'>
            {el}
          </SmText>
        ))}
      </div>
              <img src={icon} alt='zor' className='h-32 w-32 ml-4 mt-6' />
              </div>
    </div>
  );
};

export default TimeCard;
