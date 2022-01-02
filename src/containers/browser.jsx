import React from "react";
import { Heading, SmText, SubText } from "../constant/styles/text";
import cha1 from "../assets/svg/cha1.svg";
import cha0 from "../assets/svg/cha0.svg";
import cha3 from "../assets/svg/cha3.svg";
import cha4 from "../assets/svg/cha4.svg";
import hero from "../assets/svg/hero.svg";
import stroke from "../assets/svg/line.svg";
import rebg from "../assets/svg/rebg.svg";
// const style = {
//     borderRadius: "97px 0px 97px 0px",
//   };
const stylebg = {
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${rebg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "0px 0px 97px 0px"
};

const Browser = () => {
  return (
    <div className='md:py-40 py-4 md:px-32 sm:px-12 px-2 bg-dark-800'>
      <main className='grid sm:grid-cols-2 grid-cols-1 h-full' style={{borderRadius: "97px 0px 97px 0px"}}>
        <div className='hidden sm:flex items-center bg-primary-800' style={{borderRadius: "97px 0px 0px 0px"}}>
          <img src={hero} alt='web3 browser' />
        </div>
        {/* features of web3 browser */}
        <div style={{borderRadius: "0px 0px 97px 0px"}} className='bg-dark-900'>

       
        <div style={stylebg} className=' py-12 flex flex-col gap-8' >
          <div className='md:px-12 px-8'>
            <Heading className='text-primary-800'>Web3 Browser</Heading>
            <SmText className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ut a, facilis rerum numquam laborum tenetur porro
              consequatur, repudiandae quisquam placeat minima? Laborum
              recusandae iure voluptas assumenda doloribus in nam.
            </SmText>
          </div>
          <div className='md:px-12 px-8'>
            <SubText className='text-white'>
              NutGain offers the following builts in functions
            </SubText>
            <div className='gap-2'>
              <SmText className='text-white text-xl'>&bull; Secure web cryptocurrency wallet</SmText>
              <SmText className='text-white text-xl'>&bull; Decentralized applications</SmText>
              <SmText className='text-white text-xl'>&bull; Decentralized games</SmText>
              <SmText className='text-white text-xl'>&bull; Web protection</SmText>
              <SmText className='text-white text-xl'>&bull; Voice and Video call</SmText>
              <SmText className='text-white text-xl'>&bull; Secure chat</SmText>
              <SmText className='text-white text-xl'>&bull; Multilayered VPN</SmText>
            </div>
          </div>
          <div className='md:px-12 px-8'>
            <SubText className='text-white'>
              NutGain offers the following builts in functions
            </SubText>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col'>
                <img src={cha0} alt='zor' className='h-24 w-24' />
                <SmText className='text-white'>
                 Fast and ad-free
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha1} alt='zor' className='h-24 w-24' />
                <SmText className='text-white'>
                 Private
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha3} alt='zor' className='h-24 w-24' />
                <SmText className='text-white'>
                 Optimized and efficient
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha4} alt='zor' className='h-24 w-24' />
                <SmText className='text-white'>
                  Has darkn mode
                </SmText>
              </div>
            </div>
          </div>
            <div className='grid grid-cols-fr-mx mr-12  gap-4'>
              <img src={stroke} alt='stroke' className='w-full' />{" "}
              <p className='text-primary-800 text-sm self-end'>Find Out More 	&rarr;</p>
            </div>
        </div>
         </div>
      </main>
    </div>
  );
};

export default Browser;
