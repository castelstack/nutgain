import React from "react";
import logo from "../assets/svg/logo.svg";
import cup from "../assets/svg/cup.svg";
import insta from "../assets/svg/in.svg";
import bg from "../assets/svg/bghead.svg";
import msg from "../assets/svg/mm.svg";
import linkdin from "../assets/svg/link.svg";
import squ from "../assets/svg/squ.svg";
import { Heading, SmText } from "../constant/styles/text";
import { paddingX } from "../constant/styles/spacing";
import { CountdownView } from "../components/countdown";

// button component
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full ring-2 ring-white text-primary-900 sm:text-base text-sm font-bold sm:px-12 px-6  sm:py-4 py-3 bg-primary-800`}
    >
      {children}
    </button>
  );
};

const style = {
  background: ` url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

// hero component
const Hero = () => {
  return (<div className='bg-dark-800'>

    <div style={style} className={`${paddingX} flex flex-col gap-8 relative    py-12`}>
      <div className='flex flex-row  justify-between w-full items-center '>
        <img src={logo} alt='nutgain logo' className='h-12 w-32' />
        <Button>Whitepaper</Button>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
            <div className='flex flex-col gap-8'>
        <Heading className='text-white'>NutGain Ecosystem</Heading>
        <SmText className='text-primary-200'>
          NutGain is a security protocol offering users and developers powerful
          tools including Web3, DeFi, Metaverse, NFT, Crypto Wallet, D-Hyper
          Ecommerce and dApps.
        </SmText>
        <CountdownView/>
        <div className='flex gap-4 items-center'>
          <Button>Buy Now</Button>
          <Button>Whitelist your Wallet</Button>
        </div>
        <div className='flex gap-2 items-center'>
          <img src={insta} alt='insta' className='sm:h-20 sm:w-20 h-12 w-12' />
          <img src={linkdin} alt='linkdin logo' className='sm:h-20 sm:w-20 h-12 w-12' />
          <img src={msg} alt='msg ' className='sm:h-20 sm:w-20 h-12 w-12' />
          <img src={cup} alt='cup ' className='sm:h-20 sm:w-20 h-12 w-12' />
                  </div>
                  <div>

               <img src={squ} alt='cup ' className=' absolute h-full w-full -bottom-20 -right-80 bg-no-repeat sm:block hidden'/>
                  </div>
      </div>
       </div>
        </div>
    </div>
  );
};

export default Hero;
