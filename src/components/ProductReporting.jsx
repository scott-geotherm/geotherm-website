import React from 'react';
import ProductSection from './ProductSection';
import placeholderImage from '../assets/ates-app.png'; // Use an existing image as a placeholder

const ProductPermit = ({ handleOpenModal, textLocation }) => {
  const stats = [
   // { value: '500+', label: 'Permits Processed' },
   // { value: '10%', label: 'Cost Reduction' },
  ];

  return (
    <ProductSection
      title="Reporting Management Tools"
      description="Our Report Management solution provides a standard template for your ATES reporting needs, 
      designed by industry experts at GeoTherm for the geothermal industry.
      Streamline your reporting process and save time with our easy-to-use platform that automates reports 
      through custom intrgations with your existing business systems.
      "
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={placeholderImage}
      stats={stats}
      headerPrimary="Smart Reporting"
      headerSecondary="easy & fast"
    />
  );
};

export default ProductPermit; 