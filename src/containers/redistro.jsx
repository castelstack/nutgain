import React from "react";
import bg from "../assets/svg/bg.svg";
import coin from "../assets/svg/coin.svg";
import { ReactComponent as Stand } from "../assets/svg/stand.svg";
// import { ReactComponent as Coinn } from "../assets/svg/coin.svg";
import  squ from "../assets/svg/squ.svg";
import { Heading, SmText } from "../constant/styles/text";

const style = {
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100% -100%",
};
const Redistro = () => {
  return (
    <div className='h-screen relative' style={style}>
     <img src={squ} alt='msg ' className='absolute h-full w-full -left-80 top-0' />
      <div className='h-3/4 w-2/4 flex flex-col items-start justify-items-center  rounded-t-3xl pt-8 px-20 bg-dark-900 absolute bottom-0 right-0'>
        <div className='-space-y-44 flex flex-col justify-items-center '>
          {/* <Coinn  className='h-40 w-40' /> */}
          <img src={coin} alt='msg ' className='h-52 w-52 mr8 z-20' />
          <Stand className='h-52 w-52 z-10' />

          </div>
          <div>
            <Heading className='text-primary-800'>NUTG <br/>Redistribution</Heading>
            <SmText className='text-white'>
              Invest in NutGain and Earn BUSD on every subsequent buy and sell
            </SmText>
        </div>
      </div>
    </div>
  );
};

export default Redistro;
