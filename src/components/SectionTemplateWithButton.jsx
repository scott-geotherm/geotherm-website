import React from 'react';
import styles, { layout } from '../style';
import Button from './Button';

const SectionTemplateWithButton = ({ title, description, features, handleOpenModal }) => {
  return (
    <section className={layout.section} style={{ marginLeft: '40px', marginTop: '-130px'  }}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{title}</h2>
        
        <div style={{ marginLeft: '20px', }}>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          {description}
        </p>
        </div>
      </div>
      <div className={`flex ${layout.sectionImg} flex-col`} style={{ marginTop: '80px',}}>
        <div className="flex-1 flex-col mt-8">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
              <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img
                  src={feature.icon}
                  alt='icon'
                  className='w-[50%] h-[50%] object-contain'
                />
              </div>
              <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                  {feature.title}
                </h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
                  {feature.content}
                </p>
                </div>
              </div>
      
          ))}
        </div>
        <div className="flex justify-end mt-4 w-full" style={{ paddingRight: '20px' }}>
          <Button styles='mt-10' onClick={handleOpenModal}>
            Pre Launch Access
          </Button>
        </div>
      </div>



    </section>
  );
};

export default SectionTemplateWithButton; 