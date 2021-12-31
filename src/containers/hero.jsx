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
      className={`${className} rounded-full ring-2 ring-white text-primary-900 text-base font-bold px-12 py-4 bg-primary-800`}
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
      <div className='flex sm:flex-row flex-col justify-between w-full items-center'>
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
          <img src={insta} alt='insta' className='h-20 w-20' />
          <img src={linkdin} alt='linkdin logo' className='h-20 w-20' />
          <img src={msg} alt='msg ' className='h-20 w-20' />
          <img src={cup} alt='cup ' className='h-20 w-20' />
                  </div>
                  <div>

               <img src={squ} alt='cup ' className=' absolute h-full w-full -bottom-20 -right-80 bg-no-repeat'/>
                  </div>
      </div>
       </div>
        </div>
    </div>
  );
};

export default Hero;
