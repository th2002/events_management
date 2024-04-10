import { IEvent } from '@/models/event.model';
import { formatDateTime } from '@/libs/utils';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DeleteConfirmation } from './DeleteConfirmation';
import { MdOutlineEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <MdOutlineEdit className="h-[20px] w-[20px] text-content_secondary" />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="w-min rounded-full bg-green-100 px-4 py-1 text-base font-semibold text-green-600">
              {event.isFree ? 'FREE' : `$${event.price}`}
            </span>
            <p className="line-clamp-1 w-min rounded-full bg-gray-500/10 px-4 py-1 text-base font-semibold text-gray-500">
              {event.category.name}
            </p>
          </div>
        )}

        <p className="text-base font-medium text-gray-500">
          {formatDateTime(event.startDatetime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="md:p-medium-20 line-clamp-2 flex-1 text-base font-medium text-primary">
            {event.title}
          </p>
        </Link>

        <div className="flex w-full justify-between">
          <p className="text-sm font-semibold text-gray-600 md:text-base">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary">Order Details</p>
              <FaSearch className="text-content_secondary" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

