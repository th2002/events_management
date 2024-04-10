'use client';

import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import Button from '@nextui-org/button';
import Checkout from './Checkout';
import { IEvent } from '@/models/event.model';

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div className="flex items-center gap-3">
      <>
        <SignedOut>
          <Link href="/sign-in">
            <button color="primary">Get Tickets </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Checkout event={event} userId={userId} />
        </SignedIn>
      </>
    </div>
  );
};

export default CheckoutButton;

