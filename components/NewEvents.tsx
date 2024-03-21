import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import EventsList from './EventsList';

const NewEvents = () => {
  return (
    <>
      <div className="mb-16 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-content_primary md:text-3xl">
          New events in{' '}
          <span className="text-primary">
            NYC{' '}
            <FaChevronDown size={16} className="inline-block text-primary" />
          </span>
        </h2>

        <Button color="primary" variant="flat" size="sm">
          View more
        </Button>
      </div>

      <EventsList />
    </>
  );
};

export default NewEvents;

