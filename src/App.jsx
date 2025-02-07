import React, { useState } from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials,
  GetStarted
} from './components'
import styles from './style'
import ChatBot from './components/ChatBot'
import Modal from './components/Modal'
import './App.css'

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    console.log('Modal should open');
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
        <Navbar/>
        <Hero handleOpenModal={handleOpenModal} />
       
        <Stats/>
        <Business handleOpenModal={handleOpenModal} />
        <Billing/>
        <CardDeal handleOpenModal={handleOpenModal} />
        <Testimonials/>

        <Clients/>
        <CTA handleOpenModal={handleOpenModal} />
        <GetStarted handleOpenModal={handleOpenModal} />
        <Footer/>
      </div>
      <ChatBot />
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  )
}

export default App