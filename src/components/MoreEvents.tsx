import React from 'react';
import { Button } from '@nextui-org/button';
import EventsList from './EventsList';

const MoreEvents = () => {
  return (
    <>
      <div className="mb-16 mt-44 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-content_primary md:text-3xl">
          More events
        </h2>

        <Button color="primary" variant="flat" size="sm">
          View more
        </Button>
      </div>

      <EventsList />
    </>
  );
};

export default MoreEvents;
