import React from "react";
import { ReactComponent as Pie } from "../../assets/svg/pie2.svg";
import { SubText, SmText, MdHeading } from "../../constant/styles/text";
const PieChart = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 items-center md:-space-x-10 -space-x-0">
      <Pie className="w-full" />
      <aside className="w-full">
        <div
          className="w-full flex flex-col items-end p-8 gap-8 rounded bg-opacity-5 bg-primary-800"
          style={{ borderRadius: "60px" }}
        >
          <MdHeading className="md:text-5xl text-primary-800 flex">
            Total Supply{" "}
            <MdHeading className="text-white pl-6 md:text-5xl">
              1,500,000,000
            </MdHeading>
          </MdHeading>
          <MdHeading className="text-primary-800 md:text-5xl flex gap">
            Market Cap{" "}
            <MdHeading className="text-white pl-6 md:text-5xl">
              1,500,000
            </MdHeading>
          </MdHeading>
        </div>
        {/* //   legend */}
        {/* <div className='full md:mx-12 mx-0'>
          <SubText className='w-full text-white py-4 border-b-2 border-white'>
            Legend
          </SubText>
          <main className='grid grid-cols-2 justisy-between gap-4'>
            {data.map((el) => (
              <SmText key={el.title} className='flex capitalize items-center gap-3 text-white'>
                <span className={`${el.color} w-4 h-4 rounded-full`}></span>
                {el.title}
              </SmText>
            ))}
          </main>
        </div> */}
      </aside>
    </section>
  );
};

const data = [
  {
    title: "parameters",
    color: "bg-pie-100",
  },
  {
    title: "Reward & Referrals",
    color: "bg-pie-200",
  },
  {
    title: "Intial investors",
    color: "bg-pie-300",
  },
  {
    title: "presale offering",
    color: "bg-pie-400",
  },
  {
    title: "product development",
    color: "bg-pie-500",
  },
  {
    title: "general public",
    color: "bg-pie-600",
  },

  {
    title: "marketing",
    color: "bg-pie-700",
  },
];
export default PieChart;
