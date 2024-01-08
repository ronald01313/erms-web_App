"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Event {
  id: string;
  eventName: string;
}

export default function SchedAnEventPage() {
  const [events, setEvents] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    eventCategory: '',
    image: '', // Assuming this corresponds to the uploaded image data
    contactNumber: '',
    date: '',
    time: '',
  });


  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const onBookFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('/api/user/bookFormData', {
        fullName: formData.firstName + ' ' + formData.lastName, // Combine first and last names
        contactNumber: formData.contactNumber,
        eventCategory: formData.eventCategory, // Assuming eventType corresponds to eventCategory
        image: formData.image, // Assuming idUpload corresponds to image
        date: formData.date,
        time: formData.time,
      });

      console.log("Reserved Successfully", response.data);

      if (response.data.success) {
        alert('Reserved Details successfully saved!');
        router.push('/ReservedSuccess');
      } else {
        console.log("Failed to save event");
        alert("Failed to save event");
      } 
    } catch (error: any) {
      console.error('Error saving Reserved data:', error);
      alert('Failed to save Reserved data');
    }
  };

  const handleEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(event.target.value);
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('/api/event/selectEvent');
        console.log('API Response:', response.data);
        setEvents(response.data.eventNames || []);
      } catch (error : any) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []);
    return (
     

      <div className="flex items-center justify-center p-12">
       
        <div className="mx-auto w-full max-w-[550px]">
       
        <form className="items-center justify-center" onSubmit={onBookFormData}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="fName"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label
                  htmlFor="eventType"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                   
                   What Event You are Looking For?
                </label>
                <select
                  name="eventCategory"
                  id="eventType"
                  value={selectedEvent}
                  
                  onChange={handleEventChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">Select an event</option>
                  {/* Mapping through the event names */}
                  {Array.isArray(events) &&
                    events.map((eventName, index) => (
                      <option key={index} value={eventName}>
                        {eventName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label
                  htmlFor="idUpload"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Upload ID for Verification
                </label>
                <input
                  type="file"
                  name="image"
                  id="idUpload"
                  accept="image/*, .pdf"
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          


            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                 Contact number {/* Change the label text here */}
                      </label>
                      <input
                        type="number"
                        name="contactNumber"
                        id="guest"
                        onChange={handleInputChange}
                        placeholder="Enter contact number" // Update placeholder text if needed
                        min="0"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
            </div>
  
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

  
            <div>
                          <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  