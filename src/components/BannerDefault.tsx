import React from 'react';
import { Button } from '@nextui-org/button';
import { BiSearchAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

const BannerDefault = () => {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center bg-banner-hightlight bg-cover bg-center bg-no-repeat md:h-[470px]">
      {/* background overlay */}
      <div className="absolute inset-0 z-20 bg-pink-500 bg-opacity-30"></div>

      {/* content */}
      <div className="z-30 flex flex-col items-center justify-center gap-5 font-bold">
        <span className="text-2xl text-white md:text-6xl">Pick up your</span>
        <span className="text-3xl text-primary md:text-7xl">
          wonderful plans
        </span>
      </div>

      {/* search */}
      <div className="absolute -bottom-8 z-30 hidden h-16 items-center rounded-md bg-white pr-4 shadow-lg md:flex md:w-[700px] lg:w-[854px]">
        <BiSearchAlt className="mx-5 text-primary" size={24} />
        <input
          className="placeholder:text-content_third h-full flex-1 border-none text-content_secondary outline-none"
          placeholder="Find the event you are interested in"
          spellCheck="false"
        />
        <div className="h-1/2 w-px bg-gray-400"></div>
        <div className="flex items-center gap-3">
          <CiLocationOn className="ml-5 text-primary" size={24} />
          <p className="text-content_primary">New York, NY</p>
          <Button color="primary" size="md" className="w-28">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerDefault;
