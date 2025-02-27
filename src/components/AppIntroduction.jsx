import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../style';

import GetStarted from './GetStarted';

import { discount, geothermal } from '../assets'


const AppIntroduction = ({ handleOpenModal }) => {
  return (
    <section id="products" className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex flex-col md:flex-row items-center ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>
        <div className="flex-1">
          <h2 className= "font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[50px] mb-6">
            Discover Our Innovative Apps
          </h2>
          <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
            Our suite of applications is designed to support geothermal projects from inception to exploitation.
            Whatever your sector and stake of the geothermal market, we are building a digital toolbox to help you get the most out of your investment.
            <br></br>
            <br></br>
            From AI-Agent driven solutions that speed up exploration and permit granting 
            to ML models to forecast the future and classify operational status,
            Explore how the apps we are building can transform your business processes to drive efficiency and cost savings.
          </p>

          <div className='relative right-0 bottom-0 flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'
          style={{ marginLeft: '180px', marginTop: '10px'  }}
          >
            <img
              src={discount}
              alt='discount'
              className='w-[32px] h-[32px]'
            />
            <button
              className={`${styles.paragraph} ml-2 bg-transparent border-none cursor-pointer`}
              onClick={handleOpenModal}
              style={{ color: 'white', background: 'none', padding: 0, border: 'none' }}
            >
              <span className='text-white'>**</span> Sign up now for {" "}
              <span className='text-white'>Pre Launch</span> Access
            </button>
          </div>


        </div>
        <div className="flex-1 mt-10 md:mt-0 md:ml-10"
        >
          <DotLottieReact
            src="https://lottie.host/65498457-4516-46f4-9827-8b02b0c671f2/NPsRHmrkss.lottie"
     
            
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default AppIntroduction; 