import React, { useState } from 'react';
import { references } from '../constants';

const References = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer rounded-lg"
        style={{
          background: 'linear-gradient(90deg, #4b4b4b, #7d7d7d)', // Grey gradient
        }}
        onClick={toggleDropdown}
      >
        <h2 className="text-white font-bold text-xl">Page References</h2>
        <span className="text-white">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <ul className="list-none mt-4">
          {references.map((ref, index) => (
            <li key={index} className="mb-2">
              <a
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dimWhite hover:text-secondary"
              >
                {ref.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default References; 