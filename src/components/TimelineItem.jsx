import React from 'react';

const TimelineItem = ({ title, dateRange, description }) => {
  return (
    <div className="bg-black text-white shadow-lg p-4 my-4 transition-transform transform hover:scale-105">
      <div className="text-sm text-gray-500">{dateRange}</div>
      <div className="text-lg font-bold">{title}</div>
      <div className="text-base mt-2">{description}</div>
    </div>
  );
};

export default TimelineItem;