import React from 'react'
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
  Testimonials 
} from './components'
import styles from './style'
import ChatBot from './components/ChatBot'

const App = () => {
  return (
    <div style={styles.container}>
      <div className={styles.paddingX}>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
      <ChatBot />
    </div>
  )
}

export default App