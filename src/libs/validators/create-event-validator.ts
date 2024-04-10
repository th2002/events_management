import { z } from 'zod';

// Define a validation schema for event create using Zod.
export const EventCreateValidator = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(400, 'Description must be less than 400 characters'),
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(400, 'Location must be less than 400 characters'),
  price: z.string(),
  url: z.string().url()
});

// Infer the type of the validation schema.
export type TEventCreateValidator = z.infer<typeof EventCreateValidator>;

