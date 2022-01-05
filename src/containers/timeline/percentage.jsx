import React from 'react';
import { SubText, SmText } from "../../constant/styles/text";
import dot from "../../assets/svg/dot.svg";
import { paddingX } from "../../constant/styles/spacing";
import { ScrollDot, ScrollDotUp } from "../../constant/layout/animateOnScroll";

const Percentage = () => {
    return (
        <div className={`${paddingX} py-12`}>
             <div
              style={{ borderRadius: "97px 0px 97px 0px" }}
              className=' shadow-new-1 relative md:p-8 p-2'
            >
              <ScrollDotUp>
                <img
                  src={dot}
                  alt='zor'
                  className='h-4 w-4 absolute -top-1 -right-1'
                />{" "}
              </ScrollDotUp>
              <ScrollDot>
                <img
                  src={dot}
                  alt='zor'
                  className='h-4 w-4 absolute -bottom-1 -left-1'
                />
              </ScrollDot>
                <div className='grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2  gap-4 content-center'>
                    
            
                {
                    data.map(el=>
                        <div key={el.title} className='flex flex-col  items-center'>
                            <SubText className='font-extrabold text-primary-800 text-center'>{el.percentage}%</SubText>
                            <SmText className='text-white w-min text-center'>{el.title}</SmText>
                            </div>)
             }
               </div>
            </div>
        </div>
    );
};

const data = [
    {
        title: 'ICO % Private Sale',
        percentage: 45
    },
    {
        title: 'ecosystem',
        percentage: 10
    },
    {
        title: 'Marketing',
        percentage: 10
    },
     {
        title: 'Growth Fund',
        percentage: 5
    },
    {
        title: 'Reward & referrals',
        percentage: 6
    },
    {
        title: 'promoters',
        percentage: 7
    },
     {
        title: 'compilance & governace',
        percentage: 5
    },
    {
        title: 'contingency',
        percentage: 5
    },

     {
        title: 'Community service',
        percentage: 2
    },
     {
        title: 'public offering',
        percentage: 5
    },
];

export default Percentage;