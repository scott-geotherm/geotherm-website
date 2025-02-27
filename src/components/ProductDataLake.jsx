import React from 'react';
import ProductSection from './ProductSection';
import placeholderImage from '../assets/datalake.png'; // Use an existing image as a placeholder

const ProductDataLake = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '1TB', label: 'Data to be Ingested in 2025' },
    { value: '99%', label: 'Target Data Accuracy' },
    { value: '42+', label: 'Countries to be Included' },
  ];

  return (
    <ProductSection
      title="Our Data Lake"
      description="
      Our geothermal datalake pools toegther subsurface data such as bedrock & well locations, 
      surface data such as infrastructure and finally satellite imagery. Combining this data 
      holds the key to collabratively designing critical insight driven AI-powered apps 
      to automate checks, guide installations, and enhance suggest efficiency enhacements.

      The future of geothermal will relies on such collaborative digital platforms 
      that break data silos and drive efficiency. Organizations like the European Geothermal 
      Energy Council (EGEC) and US Department of Energy’s Geothermal Data Repository are 
      pushing for more open data sharing initiatives.


"
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={placeholderImage}
      stats={stats}
      headerPrimary="Data Lake"
      headerSecondary="Geotherm"
    />
  );
};

export default ProductDataLake; 