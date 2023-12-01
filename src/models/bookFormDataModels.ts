import mongoose, { Document, Schema } from 'mongoose';

// Interface representing the document in MongoDB
interface IBookFormData extends Document {
  fullName: string;
  contactNumber: string;
  eventCategory: string;
  eventSubCategory: string;
  image: File | null;
}

// Define the schema for bookFormData
const bookFormDataSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  eventCategory: { type: String, required: true },
  eventSubCategory: { type: String, required: true },
  image: { type: Schema.Types.Mixed, default: null } // Assuming File is a complex object or binary data, you can use Mixed type
});

// Define and export the model
const BookFormData = mongoose.model<IBookFormData>('BookFormData', bookFormDataSchema);
export default BookFormData;
