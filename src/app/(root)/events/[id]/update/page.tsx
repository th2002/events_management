import EventForm from '@/components/EventForm';
import { getEventById } from '@/libs/actions/event.actions';
import { auth } from '@clerk/nextjs';

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  return (
    <>
      <section className="mt-14 py-5 md:py-10">
        <h3 className="sm-text-left text-center text-xl font-bold text-black">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;

