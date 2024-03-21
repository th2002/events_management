import React from 'react';
import EventsList from './EventsList';

const UpComing = () => {
  return (
    <>
      <div className="mb-16 mt-44 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-content_primary md:text-3xl">
          Upcoming <span className="text-primary">in 24h</span>
        </h2>
      </div>

      <EventsList />
    </>
  );
};

export default UpComing;

