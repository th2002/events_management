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

type EventFormProps = {
  userId: string;
  type: 'Create' | 'Update';
};

const EventForm = ({ userId, type }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const initalValues = eventDefaultValues;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<TEventCreateValidator>({
    resolver: zodResolver(EventCreateValidator),
    defaultValues: initalValues
  });

  const onChangeCategories = (value: string) => {};

  async function onHandleCreateEvent(values: TEventCreateValidator) {
    console.log(values);
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
                  color={errors.title ? 'danger' : 'default'}
                  errorMessage={errors.title ? errors.title.message : undefined}
                  type="text"
                  label="Title"
                  spellCheck="false"
                  className={`text-content_secondary`}
                />
              </div>

              <div className="grid gap-2 py-2">
                {/* <SelectDropDown onChangeHandler={(e) => onChangeCategories(e.target.value)}/> */}
              </div>

              <div className="grid gap-2 py-2">
                <Textarea
                  {...register('description')}
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
                <FileUploader setFiles={setFiles} />
              </div>

              <div className="grid gap-2 py-2">
                <Input
                  {...register('location')}
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

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100">
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

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100">
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

              <div className="ml-2 flex h-14 w-full items-center gap-3 rounded-xl bg-slate-100">
                <Input
                  {...register('price')}
                  color={errors.price ? 'danger' : 'default'}
                  errorMessage={errors.price ? errors.price.message : undefined}
                  type="text"
                  label="Price"
                  spellCheck="false"
                  className={`text-content_secondary`}
                  startContent={<FaDollarSign className="text-gray-500" />}
                />
                <Checkbox color="primary" size="sm">
                  isFree
                </Checkbox>
              </div>

              <div className="grid gap-2 py-2">
                <Input
                  {...register('url')}
                  color={errors.url ? 'danger' : 'default'}
                  errorMessage={errors.url ? errors.url.message : undefined}
                  type="text"
                  label="URL"
                  spellCheck="false"
                  className={`text-content_secondary`}
                  startContent={<FaLink className="text-gray-500" />}
                />
              </div>

              <Button
                type="submit"
                color="primary"
                isDisabled={!isDirty || !isValid || isSubmitting}
              >
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

