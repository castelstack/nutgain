import React from "react";
import Countdown from "react-countdown";

const styleDiv = {
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
};
// Random component
const Completionist = () => (
  <span
    style={styleDiv}
    className="text-white text-xl p-4  shadow-new-2 font-bold"
  >
    Time to gain Nut!!!!
  </span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex gap-8 my-2">
        <div className="flex gap-2 items-center">
          <span
            style={styleDiv}
            className="text-white sm:text-2xl text-base p-4  rounded-md shadow-new-2 font-bold"
          >
            {days}
          </span>
          <span className="text-white sm:text-2xl text-base ">Days</span>
        </div>
        <div className="flex gap-2 items-center">
          <span
            style={styleDiv}
            className="text-white sm:text-2xl text-base p-4  rounded-md shadow-new-2 font-bold"
          >
            {hours}
          </span>
          <span className="text-white sm:text-2xl text-base ">hrs</span>
        </div>
        <div className="flex gap-2 items-center">
          <span
            style={styleDiv}
            className="text-white sm:text-2xl text-base p-4  rounded-md shadow-new-2 font-bold"
          >
            {minutes}
          </span>
          <span className="text-white sm:text-2xl text-base ">mins</span>
        </div>
        <div className="flex gap-2 items-center">
          <span
            style={styleDiv}
            className="text-white sm:text-2xl text-base p-4 rounded-md  shadow-new-2 font-bold"
          >
            {seconds}
          </span>
          <span className="text-white sm:text-2xl text-base ">secs</span>
        </div>
      </div>
    );
  }
};

export const CountdownView = () => (
  <Countdown
    date={new Date("2022-01-10T00:00:00").setHours(0, 0, 0)}
    renderer={renderer}
  />
);
