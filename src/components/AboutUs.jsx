import React from 'react';
import styles from '../style';

const AboutUs = () => {
  return (
    <section className={`flex flex-col items-center ${styles.paddingY}`}>
      <div className="w-full max-w-7xl text-center px-6">
        <h2 className={`text-gradient mb-4 font-bold text-4xl`}>About Us</h2>
        <p className="text-white text-lg leading-relaxed mx-auto">
          We founded GEOTHERM AI Technologies after recognizing how AI and automation could accelerate the adoption of geothermal energy. 
          With a background in modeling complex chemical systems, we saw firsthand how industries like water management—while making progress—still move slowly due to legacy infrastructure and an analogue-first design. 
          In contrast, geothermal energy is a rapidly expanding, data-rich field, where smart technology can drive faster decision-making, automated compliance, and optimized system performance. 
          By applying our scientific expertise and digital-first approach, we help businesses, governments, and individuals adopt geothermal energy faster, smarter, and more efficiently, supporting the transition to clean, 24/7 renewable power.
        </p>
      </div>
    </section>
  );
};

export default AboutUs; 