import React from "react";
import { paddingX } from "../constant/styles/spacing";
import { Heading, MdHeading, SmText, SubText } from "../constant/styles/text";
import ad2 from "../assets/svg/ad2.svg";
import ad3 from "../assets/svg/ad3.svg";
import ad4 from "../assets/svg/ad4.svg";
import ad5 from "../assets/svg/ad5.svg";
import ad1 from "../assets/svg/adm.svg";
import te1 from "../assets/svg/te1.svg";
import ta2 from "../assets/svg/ta2.svg";
import ta4 from "../assets/svg/tam.svg";
import bg from "../assets/svg/bgtime.svg";

const style = {
  borderRadius: "97px 0px 97px 0px",
};
const style1 = {
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover ",
};
const Team = () => {
  return (
    <div className={`   bg-dark-700 `}>
      <div
        className={`${paddingX} py-12 0 grid grid-cols-1 gap-12`}
        style={style1}
      >
        <Heading className="text-primary-800 text-center">
          Meet Our Team
        </Heading>
        <div className="flex flex-wrap items-start gap-8 justify-center">
          {team.map((el, idx) => (
            <TeamMember
              position={el.position}
              key={idx}
              image={el.image}
              desc={el.desc}
              name={el.name}
            />
          ))}
        </div>

        <Heading className="text-primary-800 text-center">Advisors</Heading>
        <div
          style={style}
          className={`${paddingX} bg-dark-700 shadow-new-3  py-8`}
        >
          <div className="flex flex-wrap items-start sm:gap-12 gap-4 justify-center">
            {adteam.map((el, idx) => (
              <Advisor
                key={idx}
                image={el.image}
                desc={el.desc}
                name={el.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamMember = ({ image, position, desc, name }) => {
  return (
    <div className="sm:w-60 w-full">
      <img src={image} alt="web3 browser" className="sm:h-40 h-32" />
      <SubText className="text-primary-800 text-center capitalize">
        {name}
      </SubText>
      <SubText className="text-white text-center">{position}</SubText>
      <SmText className="text-white text-center">{desc}</SmText>
    </div>
  );
};

const Advisor = ({ image, desc, name }) => {
  return (
    <div className="sm:w-80 w-full flex items-center">
      <img src={image} alt="web3 browser " className="sm:h-40 h-32" />
      <div>
        <MdHeading className="text-primary-800 capitalize">{name}</MdHeading>

        <SmText className="text-white font-bold">{desc}</SmText>
      </div>
    </div>
  );
};

const team = [
  {
    name: "MB",
    image: ta4,
    position: "CEO",
    desc: "A real NUT with wealth of knowledge and experience of Blockchain and Crypto Smart Contract Development",
  },
  {
    name: "Vk",
    image: ta2,
    position: "CFO",
    desc: "A total NUTs in the team with expertise in money management with Masters in economics.",
  },
  {
    name: "KBR",
    image: te1,
    position: "COO",
    desc: "An expert NUT in the field of wealth management. A capable team leader who is excellent at managing all other NUTs in the team.",
  },
  {
    name: "KP",
    image: ta2,
    position: "CMO",
    desc: "Not so Nuts! A marketing professional with over 10 years of working experience. An avid crypto follower and believer.",
  },
];

const adteam = [
  {
    desc: "Legal & Commercial Advisor",
    image: ad2,
    name: "SRR",
  },
  {
    desc: "Financial Advisor",
    image: ad4,
    name: "DS",
  },
  {
    desc: "Technology Advisor",
    image: ad5,
    name: "LS",
  },
  {
    desc: "Technology Advisor",
    image: ad3,
    name: "F-LS",
  },
  {
    desc: "Talent Hunt",
    image: ad1,
    name: "SM",
  },
];
