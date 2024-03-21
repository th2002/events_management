import React from 'react';

function Logo() {
  return (
    <span className="flex items-center justify-start gap-3">
      <img src="/logo.png" alt="logo" />
      <h1 className="text-sm font-bold text-primary sm:text-base">Smart</h1>
    </span>
  );
}

export default Logo;

