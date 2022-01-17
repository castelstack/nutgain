import React from "react";
import logo from "../../assets/webp/logo.webp";
import reward from "../../assets/webp/scanner.webp";
import ModalView from "react-modal";
import { SubText } from "../../constant/styles/text";

const stylebg = {
  background: "rgba(0, 0, 0, 0.75);",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
};

const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function ClipBoardFtn() {
    navigator.clipboard.writeText("0xC091377110ACFB780dFB9f6c200b2EF81d8cE4aB");
  }

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
        <img src={logo} alt="nutgain logo" className="h-12 w-32 m-auto" />

        <SubText className="text-primary-800 text-center lg:text-4xl py-3">
          Contract Address
        </SubText>

        <img src={reward} alt="nutgain logo" className="h-50 w-50 m-auto" />

        <p id="myInputF2" className="text-center text-xl text-primary-900 py-6">
          0xC091377110ACFB780dFB9f6c200b2EF81d8cE4aB
        </p>
        <button
          onClick={() => {
            ClipBoardFtn();
          }}
          className={`rounded-full ring-2 ring-white hover:ring-0 hover:shadow-md text-primary-900 md:text-base transition ease-in  text-sm font-bold md:px-12 px-6  md:py-4 py-3 bg-primary-800`}
        >
          {" "}
          Copy Address
        </button>

        {/* </div> */}
      </div>
    </ModalView>
  );
};

export default Modal;
