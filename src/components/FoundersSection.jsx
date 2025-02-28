import React from 'react';
import styles from '../style';
import founderImage from '../assets/founders.jpg'; // Replace with the actual path to your image
import founderImage1 from '../assets/scott.jpg'; // Replace with the actual path to your image
import founderImage2 from '../assets/alexander.jpg'; // Replace with the actual path to your image

const FoundersSection = () => {
  return (
    <section id="founders" className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex flex-col items-center mb-10`}>
        <h2 className="font-poppins font-bold text-[36px] text-gradient mb-4">
          Meet Our Scientists
        </h2>

      </div>
      <div className={`flex flex-col md:flex-row items-center ${styles.flexCenter} xl:px-0 sm:px-16 px-6`}>
        

      <div className="flex-1 flex justify-center my-10 md:my-0">
          <img src={founderImage1} alt="Founders" className="w-[200px] h-[200px] object-cover rounded-full" />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start md:pl-10">
          <h3 className="font-poppins font-semibold text-[24px] text-white mb-4">Scott Charlesworth, PhD.</h3>
          <p className={`${styles.paragraph} max-w-[400px] text-center md:text-left`}>
            Scott is a visionary AI entrepreneur with a passion for innovation, 
            technology and a smarter, greener future. 
            With a background in Data Science and ML Engineering consultancy, 
            he is now applying his business, science and technical skills to build AI startups.
          </p>
        </div>

      <div className="flex-1 flex justify-center my-10 md:my-0">
          <img src={founderImage2} alt="Founders" className="w-[200px] h-[200px] object-cover rounded-full" />
        </div>
        
        <div className="flex-1 flex flex-col items-center md:items-end md:pr-10">
          <h3 className="font-poppins font-semibold text-[24px] text-white mb-4">Alexander Bakker, PhD.</h3>
          <p className={`${styles.paragraph} max-w-[400px] text-center md:text-right`}>

          Alexander is a young dynamic data scientist with expertise in software development 
          and algothirmic speed. His last project was an innovative 
          anomaly detection model built for water networks, funded by Horzion. 
          He is now combining his skills in software development and science to build AI startups.
           
          </p>
        </div>

        

      

      </div>
    </section>
  );
};

export default FoundersSection; 