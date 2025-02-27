import React from 'react';
import geothermalSellImage from '../assets/sellingeotrans.png'; // Ensure this path is correct
import styles from '../style';

const GeothermalEnergySection = () => {
  return (
    
    <section className={`flex flex-col md:flex-row items-center ${styles.paddingY}`}>
     
      

      <div className="flex-1 flex flex-col justify-center items-start md:ml-10 ml-0 mt-10 md:mt-0">
        <h1 className="text-white font-bold text-4xl mb-4">Smart, Scalable, 24/7 Energy</h1>
        <h2 className="text-graident font-bold text-4xl  mb-4"> Harnessing The Future of Geothermal </h2>
        <p className="text-white text-lg mb-6">
          Geothermal energy is a sustainable and eco-friendly power source that taps into the Earth's natural heat. 
          Our solutions provide efficient and reliable energy, reducing carbon footprints and promoting a greener future.
        </p>
        <p>Geothermal is a clean, always-on energy source that powers everything from electricity generation to heating and cooling. Advances in AI-driven exploration and next-generation systems are making it more cost-effective and scalable than ever. With strong investment potential, 
lower long-term costs, and government incentives, geothermal is shaping the future of sustainable, energy-secure industries, cities, and homes.
</p>
<br></br>
        <ul className="list-disc list-inside text-white mb-6">
          <li>Eco-friendly and sustainable</li>
          <li>Cost-effective energy solutions</li>
          <li>Reduces carbon emissions</li>
          <li>Reliable and efficient</li>
        </ul>
        <button className="bg-blue-gradient font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
        onClick={() => window.location.href = 'https://www.iea.org/reports/the-future-of-geothermal-energy'}
        >
          Learn More
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={geothermalSellImage} alt="Geothermal Energy" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
    </section>
  );
};

export default GeothermalEnergySection; 



