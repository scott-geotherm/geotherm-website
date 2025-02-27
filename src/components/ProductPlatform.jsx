import React from 'react';
import ProductSection from './ProductSection';
import platformImage from '../assets/platform.png'; // Example image for platform

const ProductPlatform = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '99%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '', label: '' },
  ];

  return (
    <ProductSection
      title="Our Platform"
      description="Discover our platform solutions that streamline your operations and enhance productivity.
      Our async API is built to handle all your data needs, from data ingestion to data processing and data storage.
      We offer the ability to develop custom solutions to meet your specific data requirements.
      using our Data Science and AI platform powered by Dimension built by <a href='https://hal24k.com'> Hal24K Labs</a>.
      
      "
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={platformImage}
      stats={stats}
      headerPrimary="Specialised"
      headerSecondary="Platform"
    />
  );
};

export default ProductPlatform; 