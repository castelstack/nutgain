import React from "react";
// import bg from "../assets/svg/debg.svg";
import rebg from "../assets/svg/rebg.svg";
import coin from "../assets/svg/nutG.svg";
import { ReactComponent as Stand } from "../assets/svg/stand.svg";
import vid from "../assets/gif.mp4";
import { motion } from "framer-motion";
// import { ReactComponent as Coinn } from "../assets/svg/coin.svg";
// import  squ from "../assets/svg/squ.svg";
import { Heading, SmText } from "../constant/styles/text";
import { paddingX } from "../constant/styles/spacing";

// const style = {
//   background: ` url(${bg})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
// };
const stylebg = {
  background: ` url(${rebg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
};
const Redistro = () => {
  return (
    <div className="h-full grid md:grid-cols-2 grid-cols-1 items-strech bg-dark-900 ">
      <div
        style={stylebg}
        className={` ${paddingX} w-full flex flex-col items-center justify-center  py-4 `}
      >
        <div className="flex md:flex-row flex-col gap-3">
          <div className="-space-y-44 flex flex-col justify-items-center ">
            {/* <Coinn  className='h-40 w-40' /> */}
            <motion.img
              // animate={{
              //   scale: 1.1,
              //   transition: { ease: "linear", duration: 10, repeat: Infinity },
              // }}
              src={coin}
              alt="msg "
              className="h-52 w-52 mr8 z-20"
            />
            <Stand className="h-52 w-52 z-10" />
          </div>
          <div>
            <Heading className="text-primary-800">
              NUTG <br />
              Redistribution
            </Heading>
            <SmText className="text-white">
              Invest in NutGain and Earn BUSD on every subsequent buy and sell
            </SmText>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div
            className="grid grid-cols-2 items-center content-center overflow-none object-fit "
            style={{ borderRadius: "60px 0px 60px 0px" }}
          >
            <div></div>
            <div
              className="grid grid-cols-2 bg-dark-700 justify-between justify-items-center px-4 py-4"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%" }}
            >
              <SmText className="text-white mobPadding px-4 w-full text-center">
                Buy Fee
              </SmText>
              <SmText className="text-white mobPadding px-4 w-full text-center">
                Sell Fee
              </SmText>
            </div>
          </div>
          {/* 
          card 1 */}
          <div
            className="grid grid-cols-2 items-center content-center  object-fit shadow-new-2 bg-white mb-4"
            style={{ borderRadius: "30px 0px 30px 0px" }}
          >
            <div
              style={{
                borderRadius: "30px 0px 0px 0px",
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
              }}
              className="bg-primary-800"
            >
              <SmText className="text-gray-900 px-8 py-4 font-bold ">
                Redistribution
              </SmText>
            </div>
            <div className="grid grid-cols-2 divide-x justify-between justify-items-center px-4 py-4">
              <SmText className="text-gray-900 px-4 w-full text-center">
                5.00%
              </SmText>
              <SmText className="text-gray-900 px-4 w-full text-center">
                5.00%
              </SmText>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={bg} alt='' className='h-screen min-w-full py-8'/> */}
      {/* <div className='w-full' style={style}></div> */}
      <video
        src={vid}
        type="video/mp4"
        loop
        autoPlay
        muted
        className="h-full w-full self-stretch"
      />
    </div>
  );
};

export default Redistro;
