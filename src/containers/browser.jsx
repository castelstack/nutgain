import React from "react";
import { Heading, SmText, SubText } from "../constant/styles/text";
import cha1 from "../assets/svg/cha1.svg";
import cha0 from "../assets/svg/cha0.svg";
import cha3 from "../assets/svg/cha3.svg";
import cha4 from "../assets/svg/cha4.svg";
import hero from "../assets/svg/hero.svg";
import stroke from "../assets/svg/line.svg";

const style = {
    borderRadius: "97px 0px 97px 0px",
  };

const Browser = () => {
  return (
    <div className='py-40 px-32 bg-dark-800'>
      <main className='grid grid-cols-2 h-full' style={{borderRadius: "97px 0px 97px 0px"}}>
        <div className='flex items-center bg-primary-800' style={{borderRadius: "97px 0px 0px 0px"}}>
          <img src={hero} alt='web3 browser' />
        </div>
        {/* features of web3 browser */}
        <div className='md:py-12 py-8 bg-dark-900 flex flex-col gap-8' style={{borderRadius: "0px 0px 97px 0px"}}>
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
              Zor offers the following builts in functions
            </SubText>
            <ul className='list-disc gap-2'>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
              <li className='text-white text-xl'>Decentralized games</li>
            </ul>
          </div>
          <div className='md:px-12 px-8'>
            <SubText className='text-white'>
              Zor offers the following builts in functions
            </SubText>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col'>
                <img src={cha0} alt='zor' className='h-32 w-32' />
                <SmText className='text-white'>
                  Lorem ipsum dolor sit amet
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha1} alt='zor' className='h-32 w-32' />
                <SmText className='text-white'>
                  Lorem ipsum dolor sit amet
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha3} alt='zor' className='h-32 w-32' />
                <SmText className='text-white'>
                  Lorem ipsum dolor sit amet
                </SmText>
              </div>
              <div className='flex flex-col'>
                <img src={cha4} alt='zor' className='h-32 w-32' />
                <SmText className='text-white'>
                  Lorem ipsum dolor sit amet
                </SmText>
              </div>
            </div>
          </div>
            <div className='grid grid-cols-fr-mx mr-12  gap-4'>
              <img src={stroke} alt='stroke' className='w-full' />{" "}
              <p className='text-primary-800 text-sm self-end'>Find Out More</p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Browser;
