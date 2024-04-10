'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  EventCreateValidator,
  TEventCreateValidator
} from '@/libs/validators/create-event-validator';
import { eventDefaultValues } from '@/constants';

import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Spinner } from '@nextui-org/spinner';
import SelectDropDown from './SelectDropDown';
import FileUploader from './FileUploader';
import { FaLocationDot } from 'react-icons/fa6';

import DatePicker from 'react-datepicker';
import { MdDateRange } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { Checkbox } from '@nextui-org/checkbox';

import 'react-datepicker/dist/react-datepicker.css';
import { IEvent } from '@/models/event.model';
import { useRouter } from 'next/navigation';
import { useUploadThing } from '@/libs/uploadthing';
import { createEvent, updateEvent } from '@/libs/actions/event.actions';
import { convertFileToUrl } from '@/libs/utils';

type EventFormProps = {
  userId: string;
  type: 'Create' | 'Update';
  event?: IEvent;
  eventId?: string;
};

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [categorySelected, setCategorySelected] = useState(new Set([]));
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const initialValues =
    event && type === 'Update'
      ? {
          ...event,
          startDateTime: new Date(event.startDatetime),
          endDateTime: new Date(event.endDatetime)
        }
      : eventDefaultValues;

  const router = useRouter();

  const { startUpload } = useUploadThing('imageUploader');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TEventCreateValidator>({
    resolver: zodResolver(EventCreateValidator),
    defaultValues: initialValues
  });

  async function onHandleCreateEvent(values: TEventCreateValidator) {
    let uploadedImageUrl = convertFileToUrl(files[0]);

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === 'Create') {
      try {
        const newEvent = await createEvent({
          event: {
            ...values,
            imageUrl: uploadedImageUrl,
            startDateTime: startDate,
            endDateTime: endDate,
            isFree: false,
            categoryId: Array.from(categorySelected!).join('')
          },
          userId,
          path: '/profile'
        });

        if (newEvent) {
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === 'Update') {
      if (!eventId) {
        router.back();
        return;
      }

      try {
        const updatedEvent = await updateEvent({
          userId,
          event: {
            ...values,
            imageUrl: uploadedImageUrl,
            _id: eventId,
            startDateTime: startDate,
            endDateTime: endDate,
            categoryId: Array.from(categorySelected!).join(''),
            isFree: false
          },
          path: `/events/${eventId}`
        });

        if (updatedEvent) {
          router.push(`/events/${updatedEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onHandleCreateEvent)}>
            <div className="grid gap-2">
              <div className="grid gap-2 py-2">
                <Input
                  {...register('title')}
                  defaultValue={initialValues.title || ''}
                  color={errors.title ? 'danger' : 'default'}
                  errorMessage={errors.title ? errors.title.message : undefined}
                  type="text"
                  label="Title"
                  spellCheck="false"
                  className={`text-content_secondary`}
                />
              </div>

              <div className="grid w-full gap-2 py-2">
                <SelectDropDown
                  value=""
                  onChangeHandler={setCategorySelected}
                />
              </div>

              <div className="grid gap-2 py-2">
                <Textarea
                  {...register('description')}
                  defaultValue={initialValues.description || ''}
                  color={errors.description ? 'danger' : 'default'}
                  errorMessage={
                    errors.description ? errors.description.message : undefined
                  }
                  type="text"
                  label="Description"
                  spellCheck="false"
                  name="description"
                  className={`text-content_secondary`}
                />
              </div>

              <div className="grid gap-2 py-2">
                <FileUploader
                  imageUrl={initialValues.imageUrl || ''}
                  setFiles={setFiles}
                />
              </div>

              <div className="grid gap-2 py-2">
                <Input
                  {...register('location')}
                  defaultValue={initialValues.location || ''}
                  color={errors.location ? 'danger' : 'default'}
                  errorMessage={
                    errors.location ? errors.location.message : undefined
                  }
                  type="text"
                  label="Event location or Online"
                  spellCheck="false"
                  className={`text-content_secondary`}
                  startContent={<FaLocationDot className="text-gray-500" />}
                />
              </div>

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100 pl-2">
                <MdDateRange className="text-gray-500" />
                <p className="text-content_secondary">Start date</p>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  showTimeSelect
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  wrapperClassName="datePicker"
                  className="z-20 bg-slate-100 text-content_secondary"
                />
              </div>

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100 pl-2">
                <MdDateRange className="text-gray-500" />
                <p className="text-content_secondary">End date</p>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  showTimeSelect
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  wrapperClassName="datePicker"
                  className="z-20 bg-slate-100 text-content_secondary"
                />
              </div>

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100 pr-2">
                <Input
                  {...register('price')}
                  defaultValue={initialValues.price || ''}
                  color={errors.price ? 'danger' : 'default'}
                  errorMessage={errors.price ? errors.price.message : undefined}
                  type="text"
                  label="Price"
                  spellCheck="false"
                  className={`text-content_secondary`}
                  startContent={<FaDollarSign className="text-gray-500" />}
                />
                <Checkbox color="primary" size="sm">
                  <p className="text-content_secondary">isFree</p>
                </Checkbox>
              </div>

              <div className="grid gap-2 py-2">
                <Input
                  {...register('url')}
                  defaultValue={initialValues.url || ''}
                  color={errors.url ? 'danger' : 'default'}
                  errorMessage={errors.url ? errors.url.message : undefined}
                  type="text"
                  label="URL"
                  spellCheck="false"
                  className={`text-content_secondary`}
                  startContent={<FaLink className="text-gray-500" />}
                />
              </div>

              <Button type="submit" color="primary" isLoading={isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventForm;

