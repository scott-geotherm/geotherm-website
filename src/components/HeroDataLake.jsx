import React from 'react';
import HeroSection from './HeroSection';// Example image for data lake
import placeholderImage from '../assets/datalake.png'; // Use an existing image as a placeholder

const HeroDataLake = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '1TB', label: 'Data Processed' },
    { value: '99.9%', label: 'Data Accuracy' },
  ];

  return (
    <HeroSection
      title="Data Lake Solutions"
      description="Harness the power of data with our advanced data lake solutions."
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={placeholderImage} // Use the placeholder image
      stats={stats} // Pass the stats data
      headerPrimary="Data Lake"
      headerSecondary="Geotherm"
    />
  );
};


export default HeroDataLake; 