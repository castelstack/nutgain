import React from 'react';
import logo from "../../assets/svg/logo.svg";
import reward from "../../assets/svg/scanner.svg";
import ModalView from 'react-modal';
import { Heading, SmText, SubText } from "../../constant/styles/text";

const stylebg = {
    background: 'rgba(0, 0, 0, 0.75);',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    

};
  
const Modal = () => {
    const [show, setShow] = React.useState(true)
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
 function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        
       
      <ModalView
        isOpen={modalIsOpen}
        // className={''}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={"position: fixed; inset: 0px; background-color: rgba(0, 0, 0, 0.75);"}
        contentLabel="Example Modal"
      >
      
       
        <div style={stylebg} className={`${show ? 'flex' : 'hidden'} flex-col  items-center justify-items-center`}>
            {/* <div className='bg-white flex flex-col gap-8 py-12 rounded-md my-16  items-center justify-items-center'> */} 
                {/* logo */}
                <img src={logo} alt='nutgain logo' className='h-12 w-32' />
               
                 <SubText className="text-primary-800 text-center">
                    Contract Address
                 </SubText>  
                {/* img */}
                <img src={reward} alt='nutgain logo' className='h-12 w-2/4' />
                {/* write up */}
                <p className='text-center text-xl text-primary-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eius autem ratione, reprehenderit ipsam tempora, totam possimus!</p>
            {/* </div> */}
            <button
           onClick={closeModal}
            className='bg-transparent border-2 text-base text-white border-white rounded focus:outline-none'
            >close</button>
      </div>
      </ModalView>
   
    );
};

export default Modal;