import React from 'react';

export const Heading = ({children, className}) => {
    return (
        <h5 className={`${className}  font-prime lg:text-5xl text-3xl font-extrabold`}>
            {children}
        </h5>
    );
};

export const MdHeading = ({children, className}) => {
    return (
        <h5 className={`${className} font-prime  md:text-3xl text-xl font-extrabold`}>
            {children}
        </h5>
    );
};
export const SubText = ({children, className}) => {
    return (
        <h4 className={`${className} font-prime font-bold lg:text-2xl md:text-xl text-base`} >
            {children}
        </h4>
    );
};


export const SmText = ({children, className}) => {
    return (
        <h5 className={`${className} font-prime  sm:text-xl text-base`}>
            {children}
        </h5>
    );
};
