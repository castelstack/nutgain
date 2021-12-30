import React from "react";
// import { paddingX } from "../constant/styles/spacing";
import { Heading } from "../constant/styles/text";
import bg from "../assets/svg/bit.svg";
import gift from "../assets/svg/gift.svg";
import nft from "../assets/svg/nft.svg";
import { ReactComponent as Dia } from "../assets/svg/dia.svg";

const style = {
  borderRadius: "97px 0px 97px 0px",
};

const styleDiv = {  
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
  
};
const Reward = () => {
  return (
    <div className={` bg-dark-900 pt-12 overflow-hidden`}>
      <div className='flex flex-col gap-8'>
        <Heading className='text-primary-800 w-2/4 ml-24'>
          Assured Rewards up to BUSD 40,000 for Whitelisted Investors investing
          during IDO
        </Heading>
        <svg
          width='1008'
          height='26'
          viewBox='0 0 1008 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 1L672 1.00006L702 25.0001L1008 25.0001'
            stroke='white'
            stroke-opacity='0.24'
          />
        </svg>
      </div>
      <div
        className='h-screen mt-8 relative '
       style={styleDiv}
      >
        {/* <Nut className='z-10' /> */}
        <div className='pb-12 mr-24 absolute top-12 right-0 z-20 w-2/4  grid grid-cols-1 justify-items-center content-evenly h-screen gap-2'>
          <div
            style={style}
            className='shadow-new-1 bg-dark-800 flex justify-evenly items-center gap-8 p-12 w-3/5'
          >
            <Dia className='h-20 w-20' />
            {/* <img src={dia} alt='msg ' className='h-24 w-32' /> */}
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <p className='text-primary-800 sm:text-base text-sm'>
                  Lottery Winners
                </p>
                <p className='text-white sm:text-base text-sm'>
                  Token won Token won
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-primary-800 sm:text-base text-sm'>
                  Lottery Winners
                </p>
                <p className='text-white sm:text-base text-sm'>
                  Token won Token won
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-primary-800 sm:text-base text-sm'>
                  Lottery Winners
                </p>
                <p className='text-white sm:text-base text-sm'>
                  Token won Token won
                </p>
              </div>
            </div>
          </div>
          {/* rewards and giveaway */}
          <div className='flex items-center gap-20 '>
            {/* <Rewards /> */}
             <img src={gift} alt='msg ' className='h-32 w-32' />
            <div className='flex flex-col'>
              <p className='text-primary-800 sm:text-base text-sm'>
                Rewards
              </p>
              <p className='text-white sm:text-base text-sm'>
                Token won Token won
              </p>
            </div>
          </div>
          <div className='flex items-center gap-20'>
            <div className='flex flex-col'>
              <p className='text-primary-800 sm:text-base text-sm'>
                Giveaway
              </p>
              <p className='text-white sm:text-base text-sm'>
                Token won Token won
              </p>
            </div>
            {/* <Give /> */}
            <img src={nft} alt='msg ' className='h-32 w-32' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
