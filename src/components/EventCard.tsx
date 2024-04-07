import React from 'react';
import Image from 'next/image';
import { CiCalendar } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';

interface EventCardProps {
  styles: string;
  imgWidth: number;
  imgHeight: number;
  img: any;
  title: string;
  price?: number;
  like: boolean;
  positionHeart: string;
  date: string;
  location: string;
}

const EventCard = ({
  styles,
  imgWidth,
  imgHeight,
  img,
  title,
  price,
  like,
  positionHeart,
  date,
  location
}: EventCardProps) => {
  return (
    <div className={`${styles} flex h-auto flex-col rounded-md `}>
      <div className="relative">
        <Image
          priority
          src={img}
          alt={title}
          width={imgWidth}
          height={imgHeight}
          className="rounded-t-md object-cover object-center"
        />
        {like ? (
          <div
            className={`absolute -bottom-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 shadow-md ${positionHeart}`}
          >
            <CiHeart className="text-white" size={16} />
          </div>
        ) : (
          <div
            className={`absolute -bottom-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ${positionHeart}`}
          >
            <CiHeart className="text-content_secondary" size={16} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 rounded-md border-[0.5px] border-t-0 border-gray-300 px-3 py-4">
        <div className="flex justify-between">
          <span className="font-semibold text-content_primary">{title}</span>
          {price ? (
            <span className="text-primary">From ${price}</span>
          ) : (
            <span className="text-[#7AA874FF]">Free ticket</span>
          )}
        </div>

        <div className="flex items-center justify-start gap-2">
          <CiCalendar size={16} className="text-primary" />
          <span className="font-semibold text-primary">{date}</span>
        </div>

        <div className="flex items-center justify-start gap-2">
          <CiLocationOn size={16} className="text-content_thrid" />
          <span className="text-content_thrid">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

