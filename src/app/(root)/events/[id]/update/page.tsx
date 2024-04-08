import EventForm from '@/components/EventForm';
import { auth } from '@clerk/nextjs';
import React from 'react';

const UpdateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="mt-14 py-5 md:py-10">
        <h3 className="sm-text-left text-center text-xl font-bold text-black">
          Update Event
        </h3>
      </section>

      <div className="my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;

