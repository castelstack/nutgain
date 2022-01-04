import React from "react";
import { SmText, SubText } from "../constant/styles/text";
import pro1 from "../assets/svg/pro1.svg";
import pro2 from "../assets/svg/pro2.svg";
import pro3 from "../assets/svg/pro3.svg";
import dot from "../assets/svg/dot.svg";
import stroke from "../assets/svg/strokel.svg";
import stroker from "../assets/svg/liner.svg";
import { paddingX } from "../constant/styles/spacing";
import rebg from "../assets/svg/rebg.svg";
import { ScrollDot, ScrollDotUp } from "../constant/layout/animateOnScroll";

const stylebg = {
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${rebg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Products = () => {
  return (
    <div className=' bg-dark-800'>
      <div
        style={stylebg}
        className='grid grid-cols-1 py-12 gap-12 bg-dark-800'
      >
        {/* // headline with line */}
        <div className='grid grid-cols-3  sm:gap-4 gap-2'>
          <img src={stroke} alt='stroke' className='w-full' />{" "}
          <p className='text-primary-800 text-xl font-bold sm:self-end text-center'>
            Other Products
          </p>
          <img src={stroker} alt='stroke' className='w-full' />{" "}
        </div>
        {/* first two cards */}
        <div
          className={`${paddingX} grid md:grid-cols-2 grid-cols-1 w-full gap-12`}
        >
          <div className={`grid grid-cols-1 w-full gap-4`}>
            <div
              style={{ borderRadius: "97px 0px 97px 0px" }}
              className='mb-8 shadow-new-1 relative'
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
              <img src={pro1} alt='zor' className='h-80 py-2 w-full' />
            </div>
            <div>
              <SubText className='text-white mb-4'>MetaVerse</SubText>
              <SmText className='text-white'>
                NutGain is building Metaverse. It would allow users to make
                video/audio calls, do shopping for their metaverse avatars, play
                games and much more. NutGain Metaverse would be accessed via
                NutGain’s Web 3 Browser called ZOR.
              </SmText>
           
              <p className='text-primary-800 text-base'>More Info &rarr;</p>
            </div>
          </div>
          {/* second card */}
          <div className={`grid  grid-cols-1 w-full gap-4`}>
            <div
              style={{ borderRadius: "97px 0px 97px 0px" }}
              className='mb-8 shadow-new-1 relative'
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
              <img src={pro2} alt='zor' className='h-80 py-2 w-full' />
            </div>
            <div>
              <SubText className='text-white mb-4'>Wallet</SubText>
              <SmText className='text-white'>
                This user optimized crypto wallet offers users easy access to
                their cryptocurrencies, both those earned on NutGain as well as
                their other digital coin types.
              </SmText>
              <p className='text-primary-800 text-base'>More Info &rarr;</p>
            </div>
          </div>
        </div>
        {/* third card */}
        <div
          className={`${paddingX} grid md:grid-cols-2 grid-cols-1 w-full sm:gap-12 gap-8`}
        >
          <div
            style={{ borderRadius: "97px 0px 97px 0px" }}
            className='mb-8 shadow-new-1 relative'
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
            <img src={pro3} alt='zor' className='h-80 py-2 w-full' />
          </div>
          <div>
            <SubText className='text-white mb-4'>E-hype E-commerce</SubText>
            <SmText className='text-white'>
              Presenting NutGain Decentralized Hyper Ecommerce platform. It is
              connected to NutGain’s Web3 browser called ZOR.
            </SmText>

            <SmText className='text-white text-xl'>&bull;  No Advertisements</SmText>
              <SmText className='text-white text-xl'>&bull; Privacy maintained as no personal data shared</SmText>
              <SmText className='text-white text-xl'>&bull; No banking required as it is connected via secured NutGain Crypto Wallet</SmText>
              <SmText className='text-white text-xl'>&bull; Seamless online shopping experience</SmText>
             



            <SmText className='text-white'>
              Additionally, users will be able to make purchases of general
              goods and receive special discounts. Purchases can be made using
              various cryptocurrencies as well as by directly redeeming NutGain
              Token.
            </SmText>
            <p className='text-primary-800 text-base'>More Info &rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
