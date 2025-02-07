import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = ({ handleOpenModal }) => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2} onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
          Sign up now for pre launch access!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept approve and register borehole permit applications.
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
