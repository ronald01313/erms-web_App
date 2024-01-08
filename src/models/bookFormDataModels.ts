import mongoose from 'mongoose';

const bookFormDataSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  eventSubCategory: {
    type: String,
    required: true,
  },
  image: {
    type: File, // Assuming the image is stored as a URL or path
    required: true, // Update as needed based on your requirements
  },
  date: {
    type: Date, // Date field
    required: true,
  },
  time: {
    type: String, // String for time (you can adjust the type as needed)
    required: true,
  },
});




const reserveSchedData  = mongoose.models.reserveSchedData || mongoose.model
("ReserveSchedData", bookFormDataSchema);

export default reserveSchedData;
