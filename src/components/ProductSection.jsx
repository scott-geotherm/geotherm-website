import React, { useState } from 'react';
import styles from '../style';
import Stats from './Stats';
import GetStarted from './GetStarted';
import placeholderImage from '../assets/Discount2.svg'; // Use an existing image as a placeholder
import discount from '../assets/Discount2.svg'; // Use an existing image as a placeholder
import DOMPurify from 'dompurify';

const ProductSection = ({
  title,
  description,
  handleOpenModal,
  textLocation,
  image = placeholderImage,
  headerPrimary = "Next", // Default value for headerPrimary
  headerSecondary = "Generation", // Default value for headerSecondary
  stats // Add stats as a prop
}) => {
  const [isOpen, setIsOpen] = useState(false); // Set initial state to false
  const isTextLeft = textLocation === 'left';

  const sanitizedTitle = DOMPurify.sanitize(title);
  const sanitizedDescription = DOMPurify.sanitize(description);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className={`flex justify-between items-center p-4 cursor-pointer rounded-lg bg-blue-gradient`} onClick={toggleDropdown}>
        <h2 className="text-black font-bold text-xl">{title}</h2>
        <span className="text-white">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <section className={`flex flex-col ${styles.paddingY} pb-4`}>
          <div className={`flex md:flex-row flex-col`}>
            {isTextLeft ? (
              <>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                  <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[76px] text-[56px] text-white ss:leading-[104.8px] leading-[79px]'>
                      {headerPrimary} <br className='sm:block hidden'/> {" "}
                      <span className='text-gradient'>{headerSecondary}</span> {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                      <GetStarted handleOpenModal={handleOpenModal} />
                    </div>
                  </div>
                  <div
                    className='text-lg leading-relaxed text-white mt-4'
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                  />
                </div>
                <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
                  <div className='relative'>
                    <img src={image} alt={title} className='w-[100%] h-[100%] object-cover' />
                    <div className={`absolute bottom-0 ${isTextLeft ? 'right-0' : 'left-0'} flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px]`}>
                      <img
                        src={discount}
                        alt='discount'
                        className='w-[32px] h-[32px]'
                      />
                      <button
                        className={`${styles.paragraph} ml-2 bg-transparent border-none cursor-pointer`}
                        onClick={handleOpenModal}
                        style={{ color: 'white', background: 'none', padding: '4px 8px', border: 'none' }}
                      >
                        <span className='text-white'>**</span> Sign up now for {" "}
                        <span className='text-white'>Pre Launch</span> Access
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
                  <div className='relative'>
                    <img src={image} alt={title} className='w-[100%] h-[100%] object-cover' />
                    <div className={`absolute bottom-0 ${isTextLeft ? 'right-0' : 'left-0'} flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px]`}>
                      <img
                        src={discount}
                        alt='discount'
                        className='w-[32px] h-[32px]'
                      />
                      <button
                        className={`${styles.paragraph} ml-2 bg-transparent border-none cursor-pointer`}
                        onClick={handleOpenModal}
                        style={{ color: 'white', background: 'none', padding: '4px 8px', border: 'none' }}
                      >
                        <span className='text-white'>**</span> Sign up now for {" "}
                        <span className='text-white'>Pre Launch</span> Access
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6`}>
                  <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[76px] text-[56px] text-white ss:leading-[104.8px] leading-[79px]'>
                      {headerPrimary} <br className='sm:block hidden'/> {" "}
                      <span className='text-gradient'>{headerSecondary}</span> {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                      <GetStarted handleOpenModal={handleOpenModal} />
                    </div>
                  </div>
                  <div
                    className='text-lg leading-relaxed text-white mt-4'
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                  />
                </div>
              </>
            )}
          </div>
          <div className={`w-full mt-2 ${isTextLeft ? 'pl-6 sm:pl-16 xl:pl-0' : ''}`}>
            <Stats stats={stats} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductSection; 