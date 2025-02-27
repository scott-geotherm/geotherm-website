import React from 'react';
import HeroSection from './HeroSection';
import placeholderImage from '../assets/Discount2.svg'; // Use an existing image as a placeholder

const HeroPermit = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '500+', label: 'Permits Processed' },
    { value: '10%', label: 'Cost Reduction' },
  ];

  return (
    <HeroSection
      title="Permit Management"
      description="
        Reduce the Time and Cost of Permit Handling
       
        Use Our Geothermal API Intergoates our Geothermal DataBase
        Automating Permit Checks, Generating a Report &
        Facialiating Approval in Minutes.
        "
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={placeholderImage}
      stats={stats} // Pass the stats data
    />
  );
};

export default HeroPermit; 