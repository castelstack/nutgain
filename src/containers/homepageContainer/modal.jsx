import React from 'react';
import logo from "../../assets/svg/logo.svg";
import reward from "../../assets/svg/bgward.svg";

const stylebg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
};
  
const Modal = () => {
    const [show, setShow] = React.useState(false)
    return (
        <div style={stylebg} className={`${show ? 'flex' : 'hidden'} z-80 w-full flex-col gap-8 fixed top-0 right-0 h-screen  items-center justify-items-center`}>
            <div className='bg-white flex flex-col gap-8 py-12 rounded-md'>
                {/* logo */}
                <img src={logo} alt='nutgain logo' className='h-12 w-32' />
                {/* img */}
                <img src={reward} alt='nutgain logo' className='h-12 w-2/4' />
                {/* write up */}
                <p className='text-center text-xl text-primary-900'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eius autem ratione, reprehenderit ipsam tempora, totam possimus!</p>
            </div>
            <button
            onClick={()=>setShow(false)}
            className='bg-transparent border-2 text-base text-white border-white rounded focus:outline-none'
            >close</button>
        </div>
    );
};

export default Modal;