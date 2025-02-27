import React from 'react';
import { features } from '../constants';
import SectionTemplateWithButton from './SectionTemplateWithButton';
import Button from './Button';

const BusinessMain = ({ handleOpenModal }) => {
  const title = "AI and Smart Software to Automate Checks, Guide Installation and Optimise System Performance";
  const description = "Our AI-powered software automates complex checks, guides installations, optimizes system performance and streamlines reporting, saving time, costs, and effort. From borehole permits to drilling and thermal energy storage management, we streamline processes, reduce errors, and enhance efficiency—helping businesses, governments, and homeowners adopt geothermal energy faster and smarter.";

  return (
    <div id="platform">
      <SectionTemplateWithButton
        title={title}
        description={description}
        features={features}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
};

export default BusinessMain; 