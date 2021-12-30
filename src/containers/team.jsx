import React from "react";
import { paddingX } from "../constant/styles/spacing";
import { Heading, MdHeading, SmText, SubText } from "../constant/styles/text";
import ad2 from "../assets/svg/ad2.svg";
import ad3 from "../assets/svg/ad3.svg";
import ad4 from "../assets/svg/ad4.svg";
import ad5 from "../assets/svg/ad5.svg";
import te1 from "../assets/svg/te1.svg";
import ta2 from "../assets/svg/ta2.svg";
import ta4 from "../assets/svg/ta4.svg"

const style = {
  borderRadius: "97px 0px 97px 0px",
};
const Team = () => {
  return (
    <div className={`${paddingX} py-12 bg-dark-800 grid grid-cols-1 gap-12`}>
      <Heading className='text-primary-800 text-center'>Meet Our Team</Heading>
      <div className='flex flex-wrap items-start gap-8 justify-center'>
        
         {team.map(el =>
          <TeamMember key={el} image={el.image} />
            )}
      </div>

      <Heading className='text-primary-800 text-center'>Advisors</Heading>
      <div
        style={style}
        className={`${paddingX} bg-dark-700 shadow-new-3 p-4`}
      >
        <div className='flex flex-wrap items-start gap-12 justify-center'>
          {adteam.map(el =>
          <Advisor key={el} image={el.image} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamMember = ({image, position}) => {
  return (
    <div className='sm:w-60 w-full'>
      <img src={image} alt='web3 browser' />
      <SubText className='text-primary-800 text-center'>Name</SubText>
      <SubText className='text-white text-center'>{position}</SubText>
      <SmText className='text-white text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. repudiandae
      </SmText>
    </div>
  );
};

const Advisor = ({image}) => {
  return (
    <div className='sm:w-80 w-full flex items-center'>
      <img src={image} alt='web3 browser ' />
      <div>
        
      <MdHeading className='text-primary-800 '>Ad name</MdHeading>

      <SmText className='text-white font-bold'>
        Lorem ipsum dolor sit amet
      </SmText>
      </div>
    </div>
  );
};

const team = [
  {
    image :te1,
    position:'CEO'
  },
  {
    image :ta4,
    position:'CFO'
  },
  {
    image :ta2,
    position:'COO'
  },
  {
    image :ta2,
    position:'CMO'
  },
];

const adteam = [
  {
    image :ad3,
    position:'CEO'
  },
  {
    image :ad2,
    position:'CFO'
  },
  {
    image :ad4,
    position:'COO'
  },
  {
    image :ad3,
    position:'CMO'
  },
    {
    image :ad5,
    position:'CFO'
  },
];