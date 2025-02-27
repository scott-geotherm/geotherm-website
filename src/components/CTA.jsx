import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = ({ handleOpenModal }) => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2} onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
          Sign up now for Pre Launch Access!
        </h2>
        <p className={`${styles.paragraph} max-w-[870px] mt-5`}
        style={{ marginLeft: '20px',}}> 
          We want to hear from you, get in touch with us to find out more
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button styles="mt-10" onClick={handleOpenModal}>
          Pre Launch Access
        </Button>
      </div>
    </section>
  )
}

export default CTA
