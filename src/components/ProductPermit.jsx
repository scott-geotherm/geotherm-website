import React from 'react';
import ProductSection from './ProductSection';
import placeholderImage from '../assets/permitapp.png'; // Use an existing image as a placeholder

const ProductPermit = ({ handleOpenModal, textLocation }) => {
  const stats = [
    { value: '1-6hr', label: 'Manual Descion Time' },
    { value: '<1hr', label: 'When AI Agent Assisted' },
    { value: '≤ €100', label: 'Cost Reduction per Permit' },
  ];

  return (
    <ProductSection
      title="Permit Management"
      description="
      Using the latest AI Agent technology to complement
      traditional alogrithms. 
      Our Permit Management solution, currently under construction, 
      will streamline the entire process of permit handling.
      <br></br>
      Automating traditional labour intensive desk research
      in order to provide you with a comprehensive permit application report.
      Reducing lead times and costs, facilitating approvals in minutes not hours.
      <br></br>
      Experience the efficiency of our AI-driven permit management solution."
      handleOpenModal={handleOpenModal}
      textLocation={textLocation}
      image={placeholderImage}
      stats={stats}
      headerPrimary="AI Agent"
      headerSecondary="Permit App"
    />
  );
};

export default ProductPermit; 