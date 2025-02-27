import React from 'react';
import styles from '../style';

const StatsGeo = () => {

  const geoStats = [
    { 
      value: '100%', 
      label: <>Renewable 24/7 <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}> [1]</span></>,
      valueMaxWidth: 100,
      labelMaxWidth: 150,
      divMaxWidth: 250
    },
    { 
      value: '30-100%', 
      label: <>Reduction in CO2 using Geothermal Resources <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}>[2]</span></>,
      valueMaxWidth: 200,
      labelMaxWidth: 300,
      divMaxWidth: 500
    },
    { 
      value: '€242', 
      label: <>Domestic Yearly Energy Savings using Heat Pumps <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}>[3]</span></>,
      valueMaxWidth: 100,
      labelMaxWidth: 330,
      divMaxWidth: 430
    },
  ];
  
  return (
    <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6 px-6 sm:px-16`}
      style={{ marginTop: '-35px'  }}
    >
      {geoStats.map((stat, index) => (
        <div 
          key={index} 
          className={`flex justify-start items-left flex-row m-3`}
          style={{ maxWidth: stat.divMaxWidth || 300 }}
        >
          <h4 
            className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[33px] text-white'
            style={{ maxWidth: stat.valueMaxWidth || 100 }}
          >
            {stat.value}
          </h4>
          <p 
            className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'
            style={{ maxWidth: stat.labelMaxWidth || 200 }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsGeo; 