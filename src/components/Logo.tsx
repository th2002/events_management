import React from 'react';
import Image from 'next/image';
import LogoImage from '/public/logo.png';

function Logo() {
  return (
    <span className="flex items-center justify-start gap-3">
      <Image src={LogoImage} alt="logo" />
      <h1 className="text-sm font-bold text-primary sm:text-base">Smart</h1>
    </span>
  );
}

export default Logo;
