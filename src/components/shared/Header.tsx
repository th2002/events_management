import React from 'react';
import Logo from '../Logo';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, currentUser } from '@clerk/nextjs';

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-background px-4 shadow-lg md:px-10">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-4">
        <SignedOut>
          <Button color="primary" variant="flat" size="sm">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button color="primary" size="sm">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </SignedOut>

        <SignedIn>
          <p className="text-content_secondary">
            😃 <span className="font-semibold">{user?.username}</span>
          </p>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;

