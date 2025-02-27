import React from 'react';
import styles from '../style';

const StatsSection = ({ stats }) => {
  return (
    <div className={`flex justify-around items-center w-full py-4 bg-gray-800`}>
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-white font-bold text-lg">{stat.value}</span>
          <span className="text-gray-400 text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsSection; 