import React from "react";
import { SmText } from "../../constant/styles/text";

export const TimeCard = ({ year, info, title, icon }) => {
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
        <img src={icon} alt='zor' className='justify-self-end h-20 w-20 ml-4 mt-6' />
      </div>
    </div>
  );
};

export const TimeCardTwo = ({ year, info, title, icon, data, subDesc }) => {
  return (
    <div className='flex flex-col items-start gap-4 w-full '>
      <div className='flex flex-col items-start w-full gap-4 rounded-b-md border-l-2 border-gray-700 py-4'>
        <SmText className='text-white px-6 w-full py-3 bg-dark-800'>
          {title}
        </SmText>
        {data.map((el) => (
          <div key={el} className='flex flex-col gap-2 px-4 justify-items-start'>
            {info.map((el) => (
              <div key={el}>
                <SmText  className='text-gray-100 font-bold'>
                  {el.desc}
                </SmText>
                {subDesc.map((el) => (
                  <SmText key={el} className='ml-4 text-gray-700 '>
                    {el}
                  </SmText>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='h-4'>
        <SmText className='text-gray-100 border-2 border-gray-100 px-3 py-2'>
          {year}
        </SmText>
      </div>
    </div>
  );
};
