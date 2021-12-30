import React from "react";
import {  SmText, SubText } from "../constant/styles/text";
import cha3 from "../assets/svg/cha3.svg";
import stroke from "../assets/svg/line.svg";
// import stroker from "../assets/svg/liner.svg";
import { paddingX } from "../constant/styles/spacing";

const Products = () => {
  return (
    <div className='grid grid-cols-1 py-12 gap-8 bg-dark-800'>
      {/* // headline with line */}
      <div className='grid grid-cols-fr- gap-4'>
        <img src={stroke} alt='stroke' className='w-full' />{" "}
        <p className='text-primary-800 text-xl font-bold self-end text-center'>Other Product</p>
        {/* <img src={stroker} alt='stroke' className='w-full' />{" "} */}
      </div>
      {/* first two cards */}
      <div className={`${paddingX} grid grid-cols-2 w-full gap-12`}>
        <div>
          <img src={cha3} alt='zor' className='h-32 w-32' />
          <SubText className='text-white'>MetaVerse</SubText>
          <SmText className='text-white'>
          NutGain is building Metaverse. It would allow users to make video/audio calls, do shopping for their metaverse avatars, play games and much more. NutGain Metaverse would be accessed via NutGain’s
Web 3 Browser called ZOR. 
          </SmText>
          <p className='text-primary-800 text-sm'>More Infor</p>
        </div>
        <div>
          <img src={cha3} alt='zor' className='h-32 w-32' />
          <SubText className='text-white'>MetaVerse</SubText>
          <SmText className='text-white'>
          This user optimized crypto wallet offers users easy access to their cryptocurrencies, both those earned on NutGain as well as their other digital coin types.
          </SmText>
          <p className='text-primary-800 text-sm'>More Infor</p>
        </div>
      </div>
      {/* third card */}
      <div className={`${paddingX} grid grid-cols-2 w-full gap-12`}>
        <img src={cha3} alt='zor' className='h-32 w-32' />
        <div>
          <SubText className='text-white'>MetaVerse</SubText>
          <SmText className='text-white'>
          This user optimized crypto wallet offers users easy access to their cryptocurrencies, both those earned on NutGain as well as their other digital coin types.
          Additionally, users will be able to make purchases of general goods and receive special discounts. Purchases can be made using various cryptocurrencies as well as by directly redeeming NutGain Token.
          </SmText>
          <p className='text-primary-800 text-sm'>More Infor</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
