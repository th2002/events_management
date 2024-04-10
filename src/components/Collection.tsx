import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import { IEvent } from '@/models/event.model';

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events';
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map(event => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="wrapper flex min-h-[200px] w-full flex-col items-center justify-center gap-3 rounded-[14px] bg-gray-50 py-28 text-center">
          <h3 className="text-xl font-semibold text-orange-600 md:text-lg md:font-semibold">
            {emptyTitle}
          </h3>
          <p className="text-base font-medium text-content_secondary">
            {emptyStateSubtext}
          </p>
        </div>
      )}
    </>
  );
};

export default Collection;

