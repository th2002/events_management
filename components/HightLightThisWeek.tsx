import { events } from '@/constants';
import { Button } from '@nextui-org/button';
import React from 'react';
import { CiCalendar, CiLocationOn } from 'react-icons/ci';

const HightLightThisWeek = () => {
  const eventHightLight = events[events.length - 1];

  return (
    <>
      <div className="mb-16 mt-44 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-content_primary md:text-3xl">
          Hightlights <span className="text-primary">this week</span>
        </h2>

        <Button color="primary" variant="flat" size="sm">
          View more
        </Button>
      </div>

      <div className="relative w-full">
        <img
          className="h-[418px] w-full object-cover object-center"
          src={eventHightLight?.url}
          alt={eventHightLight?.title}
        />

        <div className="absolute left-1/2 top-1/2 flex h-[297px] w-[345px] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-md bg-white p-8 sm:left-10 sm:w-[445px] sm:translate-x-0">
          <span className="text-sm text-primary">
            From ${eventHightLight?.price}
          </span>

          <p className="text-xl font-semibold text-content_primary">
            {eventHightLight?.title}
          </p>

          <div className="flex items-center justify-start gap-2">
            <CiCalendar size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              {eventHightLight?.date}
            </span>
          </div>

          <div className="flex items-center justify-start gap-2">
            <CiLocationOn size={16} className="text-content_thrid" />
            <span className="text-sm text-content_thrid">
              {eventHightLight?.location}
            </span>
          </div>

          <Button color="primary" size="md" radius="sm">
            Purchase Ticket{' '}
          </Button>
        </div>
      </div>
    </>
  );
};

export default HightLightThisWeek;

