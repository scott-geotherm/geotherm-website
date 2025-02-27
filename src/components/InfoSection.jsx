import React from 'react';
import styles from '../style';

const InfoSection = ({ title, content }) => {
  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h2 className="font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[50px] mb-6">
          {title}
        </h2>
        <div className="flex flex-col space-y-6">
          {content.map((item, index) => (
            <div key={index} className="flex flex-row items-start bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">{item.heading}</h3>
                <p className="text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 