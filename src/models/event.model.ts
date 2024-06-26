import { Document, Schema, model, models } from 'mongoose';
import { optional } from 'zod';

export interface IEvent extends Document {
  title: string;
  description?: string;
  location?: string;
  createAt: Date;
  imageUrl: string;
  startDatetime: Date;
  endDatetime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, optional: true },
  location: { type: String, optional: true },
  createAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDatetime: { type: Date, default: Date.now },
  endDatetime: { type: Date, default: Date.now },
  price: { type: String, optional: true },
  isFree: { type: Boolean, default: false },
  url: { type: String, optional: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
