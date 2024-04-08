'use client';

import React from 'react';
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

type EventFormProps = {
  userId: string;
  type: 'Create' | 'Update';
};

const EventForm = ({ userId, type }: EventFormProps) => {
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(JSON.stringify(values));
    console.log('123');
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
                  name="title"
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

              <Button type="submit" color="primary">
                {isSubmitting ? <Spinner color="primary" /> : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventForm;

