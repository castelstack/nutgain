import React from 'react';

import { Heading, SmText } from "../constant/styles/text";
import hero from "../assets/svg/gp.svg";
import stroke from "../assets/svg/line.svg";
import { paddingX } from '../constant/styles/spacing';

const Exchange = () => {
    return (
        <div className={`${paddingX} py-12 grid sm:grid-cols-2 grid-cols-1 bg-dark-900 items-center h-screen`}>
            <div className='flex flex-col gap-32 justify-between'>
            <div >
            <Heading className='text-primary-800'>DeFi Exchange</Heading>
            <SmText className='text-white'>
            NutGain DeFi Exchange would allow users to trade/lend/borrow various cryptocurrencies. Besides usual features of a DeFi Exchange, NutGain will incorporate some unique and brand new features to allow cryptocurrency holder a clear edge.
            </SmText>
          </div>
          <div className='grid grid-cols-fr-mx mt-12  gap-4'>
              <img src={stroke} alt='stroke' className='w-full' />{" "}
              <p className='text-primary-800 text-sm self-end'>Find Out More &rarr;</p>
            </div>
            </div>
           
            <img src={hero} alt='stroke' className='w-full transform -translate-y-40' />
        </div>
    );
};

export default Exchange;