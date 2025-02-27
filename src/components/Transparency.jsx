import React from 'react';
import { bill, discount } from '../assets';
import styles, { layout } from '../style';

const Transparency = ({ handleOpenModal }) => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className="text-white font-bold text-xl">Understand how outcomes  are reached</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Transparency is at the core of our AI-powered solutions. 
          We work to ensure every decision, recommendation, and analysis is traceable, explainable, and backed by data.
          With clear visual insights and audit-ready reports, 
          users can confidently trust and verify AI-driven geothermal assessments—making 
          compliance, planning, and optimization seamless.
        </p>
        <div className='w-full flex justify-end mt-6'>
          <div className='flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
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
      </div>  
    </section>
  );
};

export default Transparency; 