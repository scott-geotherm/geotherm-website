import React from 'react';
import HeroSection from './HeroSection';
import platformImage from '../assets/Discount2.svg'; // Example image for platform

const HeroPlatform = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '99%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <HeroSection
      title="Platform Solutions"
      description="Discover our platform solutions that streamline your operations and enhance productivity."
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={platformImage}
      stats={stats}
    />
  );
};

export default HeroPlatform;
