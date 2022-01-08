import React from "react";
// import { paddingX } from "../constant/styles/spacing";
import { SmText } from "../constant/styles/text";
import dia from "../assets/svg/dia.svg";
import gift from "../assets/svg/gift.svg";
import nft from "../assets/svg/nft.svg";
import bgward from "../assets/svg/bgward.svg";
import liner from "../assets/svg/liner.svg";
import linerl from "../assets/svg/strokel.svg";

// import { ReactComponent as Dia } from "../assets/svg/dia.svg";
import { ReactComponent as Whole } from "../assets/svg/whole.svg";
const style = {
  borderRadius: "60px 0px 60px 0px",
};

// const styleDiv = {
//   background: ` url(${bg})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "100%",
//   '@media (maxWidth:640px)': {
//     background: 'none'
//   }
// };
const Reward = () => {
  return (
    <div className={` bg-dark-700`}>
      <Whole className="hidden md:block w-full" />
      <div className={`  md:hidden block overflow-hidden`}>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-12 gap-2 items-center sm:px-0 px-4  py-12">
          <img
            src={linerl}
            alt="stroke"
            className="self-center sm:block hidden"
          />
          <img
            src={bgward}
            alt="stroke"
            className=" w-full justify-self-center"
          />
          <img
            src={liner}
            alt="stroke"
            className="self-center sm:block hidden"
          />
        </div>
        <div className="md:h-screen pt-2   ">
          {/* <Nut className='z-10' /> */}
          <div className="py-12 sm:mr-24 px-4  z-20 md:w-2/4 w-full grid grid-cols-1 justify-items-center content-evenly md:h-screen gap-2">
            <div
              style={style}
              className="shadow-new-1  flex justify-evenly items-center gap-8 p-12 md:w-3/5 w-full "
            >
              <img src={dia} alt="reward from nutgain" className="h-32 w-32" />
              {/* <img src={dia} alt='msg ' className='h-24 w-32' /> */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <p className="text-primary-800 sm:text-base text-sm">
                    Lottery Winners
                  </p>
                  <p className="text-white sm:text-base text-sm">
                    15,000 BUSD to investors in IDO
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary-800 sm:text-base text-sm">
                    Mega Winners
                  </p>
                  <p className="text-white sm:text-base text-sm">
                    2 Ethereum & 10BNBs.
                  </p>
                </div>
              </div>
            </div>
            {/* rewards and giveaway */}
            <div className="flex items-center  gap-1 w-full  ">
              {/* <Rewards /> */}
              <img src={gift} alt="msg " className="h-32 w-32" />
              <div className="flex flex-col">
                <SmText className="font-bold text-primary-800 sm:text-base text-sm">
                  Rewards
                </SmText>
                <p className="text-white sm:text-base text-sm">
                  Assured Rewards to all investor inIDO of up to BUSD 20,000
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-1 w-full  ">
              <div className="flex flex-col">
                <SmText className="font-bold text-primary-800 sm:text-base text-sm">
                  Giveaway
                </SmText>
                <p className="text-white sm:text-base text-sm">
                  Unique NFT Giveaways up to 5,000 BUSD
                </p>
              </div>
              {/* <Give /> */}
              <img src={nft} alt="msg " className="h-32 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
