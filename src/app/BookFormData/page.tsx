/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

interface EventFormData {
  fullName: string;
  contactNumber: string;
  eventCategory: string;
  eventSubCategory: string;
  image: File | null;
}

const BookEvent: React.FC = () => {
  const [formData, setFormData] = useState<EventFormData>({
    fullName: '',
    contactNumber: '',
    eventCategory: '',
    eventSubCategory: '',
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData({
      ...formData,
      image: file || null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform actions with form data here, such as sending it to the server.
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    // Handle cancel button click here, e.g., navigate back or clear the form.
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Book an Event</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventCategory" className="block text-gray-700 font-semibold mb-2">
            Choose an Event (Category)
          </label>
          <select
            id="eventCategory"
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            {/* Add your event categories here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="eventSubCategory" className="block text-gray-700 font-semibold mb-2">
            Choose an Event (Subcategory)
          </label>
          <select
            id="eventSubCategory"
            name="eventSubCategory"
            value={formData.eventSubCategory}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Subcategory</option>
            {/* Add your event subcategories here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Upload an Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          {formData.image && (
            <img src={URL.createObjectURL(formData.image)} alt="Selected Image" className="max-w-full h-auto" />
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white bg-blue font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Book
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white bg-blue font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default BookEvent;
