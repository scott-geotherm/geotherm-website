import React from 'react';
import Button from './Button';
import { arrowUp } from '../assets';

const GetStarted = ({ handleOpenModal }) => {
  return (
    <Button

    
      onClick={handleOpenModal}
      styles="w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer border-none"
    >
      <div className="flex flex-col items-center justify-center bg-primary w-full h-full rounded-full">
        <div className="flex flex-row items-center">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Pre</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Access</span>
        </p>
      </div>
    </Button>
  );
};

export default GetStarted;



