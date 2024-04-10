import CheckoutButton from '@/components/CheckoutButton';
import Collection from '@/components/Collection';
import {
  getEventById,
  getRelatedEventsByCategory
} from '@/libs/actions/event.actions';
import { formatDateTime } from '@/libs/utils';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const EventDetails = async ({
  params: { id },
  searchParams
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string
  });

  return (
    <>
      <section className="mt-20 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="rounded-full bg-green-500/10 px-5 py-2 font-bold text-green-700">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </p>
                  <p className="rounded-full bg-gray-500/10 px-4 py-2.5 text-base font-medium text-gray-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="ml-2 mt-2 text-lg font-medium sm:mt-0">
                  by{' '}
                  <span className="text-primary">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 md:gap-3">
                <FaCalendarAlt className="size-8 text-primary" />
                <div className="flex flex-wrap items-center text-base font-medium lg:text-lg">
                  <p className="text-content_secondary">
                    {formatDateTime(event.startDatetime).dateOnly} -{' '}
                    {formatDateTime(event.startDatetime).timeOnly}
                  </p>
                  <p className="mx-4 text-content_secondary"> &gt; </p>
                  <p className="text-content_secondary">
                    {formatDateTime(event.endDatetime).dateOnly} -{' '}
                    {formatDateTime(event.endDatetime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-lg">
                <FaLocationDot className="size-8 text-primary" />
                <p className="text-base font-medium text-content_secondary lg:text-lg">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold text-gray-600">
                Visit this page:
              </p>
              <p className="text-base font-medium text-content_secondary lg:text-lg lg:font-semibold">
                {event.description}
              </p>
              <p className="text-base font-medium text-primary underline lg:text-lg lg:font-semibold">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="ml-24 text-2xl font-bold text-gray-600">
          Related Events
        </h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;

