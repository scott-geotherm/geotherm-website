import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import React from 'react'

const HeroPlatform = ({ handleOpenModal }) => {
  return (
    <section id='home2' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <button
            className={`${styles.paragraph} ml-2 bg-transparent border-none cursor-pointer`}
            onClick={handleOpenModal}
            style={{ color: 'white', background: 'none', padding: 0, border: 'none' }}
          >
            <span className='text-white'>**</span> Sign up now for {" "}
            <span className='text-white'>Pre-launch</span> Access
          </button>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Next <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted handleOpenModal={handleOpenModal}/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Permit Handling
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         
        Reduce the Time and Cost of Permit Handling.<br />
        <br />
        Use Our Geothermal API Intergoates our Geothermal DataBase
        Automating Permit Checks, Generating a Report &
        Facialiating Approval in Minutes.
        
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
