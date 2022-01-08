import React from "react";
import logo from "../../assets/svg/logo.svg";
import BUSD from "../../assets/svg/BUSD.svg";
import ModalView from "react-modal";

const stylebg = {
  background: "rgba(0, 0, 0, 0.75);",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
};

const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <ModalView isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(false)}
        className=" closebtn absolute bg-transparent border-2 text-base text-white border-white rounded focus:outline-none"
      >
        X
      </button>
      <div
        style={stylebg}
        className={`flex-col  items-center justify-items-center`}
      >
        <img src={logo} alt="nutgain logo" className="h-12 w-32" />

        <img src={BUSD} alt="nutgain logo" className="h-50 w-50" />

        <p id="myInputF2" className="text-center text-xl text-primary-900 py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </ModalView>
  );
};

export default Modal;
