import mongoose from 'mongoose';


// Define the EventFormData schema
const eventFormDataSchema = new mongoose.Schema({
  organizerName: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  numberOfAttendees: {
    type: Number,
    required: true,
  },
})

// Create a Mongoose model for EventFormData


const eventFormData  = mongoose.models.eventFormData || mongoose.model
("eventFormData", eventFormDataSchema);

export default eventFormData;
