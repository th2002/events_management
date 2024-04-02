import React from 'react';
import Logo from '../Logo';
import { Button } from '@nextui-org/button';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-background px-4 shadow-lg md:px-10">
      <Logo />

      <div className="flex items-center gap-4">
        <Button color="primary" variant="flat" size="sm">
          Login
        </Button>
        <Button color="primary" size="sm">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;

