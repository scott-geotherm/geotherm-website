import React, { useState } from 'react'
import { 
  Footer, 
  Hero, 
  ProductPlatform, 
  ProductPermit, 
  ProductDataLake, 
  ProductReporting,
  Navbar, 
  Testimonials,
  BusinessMain,
  Transparency,
  FoundersSection,
  AppIntroduction,
  StatsGeo,
  Modal,
  CTA,
  StatsInvest,
  References,
} from './components'
import GeothermalEnergySection from './components/GeothermalEnergySection'
import AboutUs from './components/AboutUs'
import styles from './style'

import './App.css'

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  console.log('App component rendering');
  console.log('handleOpenModal:', handleOpenModal);

  return (
    <div style={styles.container}>
      <div className={styles.paddingX}>
        <Navbar handleOpenModal={handleOpenModal} />
        <Hero handleOpenModal={handleOpenModal} textLocation="left" />
        
        <StatsGeo />

        <BusinessMain handleOpenModal={handleOpenModal} />
        
        <AppIntroduction  handleOpenModal={handleOpenModal}/>
        
        
        
        <ProductPermit handleOpenModal={handleOpenModal} textLocation="right" />
        <ProductReporting  handleOpenModal={handleOpenModal} textLocation="left" />
        <ProductDataLake handleOpenModal={handleOpenModal} textLocation="right" />
        <ProductPlatform  handleOpenModal={handleOpenModal} textLocation="left" />
        
        <div className="w-full text-center mb-18">
        <h1 className="text-gradient font-bold text-4xl">
          Transparent, Explainable and Traceable AI Assisted Decision Making
        </h1>

      </div>
        <Transparency handleOpenModal={handleOpenModal} />
       <div className="w-full text-center mb-18">
        <h1 className="text-gradient font-bold text-4xl">
          Why Geothermal Resources are the Future of the Global Energy Sector
        </h1>
        

      </div>
      
        <GeothermalEnergySection handleOpenModal={handleOpenModal} />
        
        <StatsInvest />
        <AboutUs />
        
        
        
        
        <CTA handleOpenModal={handleOpenModal} />
        
        
        
        <References />
        <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
        
        <Footer/>
      </div>
    
    </div>
  )
}

export default App
