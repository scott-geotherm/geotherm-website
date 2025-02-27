import React from 'react';
import styles from '../style';

const StatsInvest = () => {

  const geoStats = [
    { 
      value: '$8.3',
      label: <>Billion US Geothermal Energy in 2024 <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}> [4]</span></> 
    },
    { 
      value: '8.3%', 
      label: <>CAGR: Geothermal Energy Market 2024 - 2032 <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}>[4]</span></>

    },
    { 
      value: '19%', 
      label: <>CAGR: EU Heat Pump Market 2024 - 2032 <span style={{ verticalAlign: 'super', fontSize: 'smaller' }}>[5]</span></> 
    },
  ];
  

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 px-6 sm:px-16`}>
      {geoStats.map((stat, index) => (
        <div key={index} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsInvest; 