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
  eventTime: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  attendees: {
    type: Number,
    required: true,
  },
})

// Create a Mongoose model for EventFormData
const EventFormData = mongoose.model('eventformdatas', eventFormDataSchema);

export default EventFormData;
