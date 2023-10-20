/* eslint-disable react/no-unescaped-entities */
'use client'; // Corrected the 'use' statement

import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';



export default function EventOrgFormData() {

    const router = useRouter();

    const [formData, setFormData] = useState({
      organizerName: '',
      eventName: '',
      numberOfAttendees: '',
      location: '',
      eventDate: '',
      time: '',
    });
  
   
  
    const onEventFormData = async () => {
      try {
        const response = await axios.post('/api/user/EventFormData', formData);
        if (response.status === 201) {
          // Show a success message
          alert('Event Details successfully saved!');
          // Redirect to the home page or another page
          router.push('/'); // Replace with the path you want to redirect to
        }
      } catch (error) {
        console.error('Event Data Not Saved', error);
        // Show an error message
        alert('Failed to save event data');
      }
    };

    return (
        <div className="bg-gray bg-opacity-3 p-12 flex items-center justify-center">
            
            <div className="mx-auto max-w-[550px] bg-white p-4">
           
                <div className="items-center justify-center">
                    <h1 className='text-white stroke-indigo-200 text-center text-4xl underline'>Event Details</h1>
                </div><br></br>
                <form className="items-center justify-center">
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Organizer's Name
                            </label>
                            <input type="text" name="fName" id="fName" placeholder="Full Name"
                            onChange={(e) => setFormData({...formData, organizerName: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Event Name
                            </label>
                            <input type="text" name="lName" id="lName" placeholder="Name of the event"
                             onChange={(e) => setFormData({...formData,   eventName: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#efeff3]">
                        How many guest are you bringing?
                    </label>
                    <input type="number" name="guest" id="guest" 
                    placeholder="5" min="0"
                    onChange={(e) => setFormData({...formData,   numberOfAttendees: e.target.value})}
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="location" className="mb-3 block text-base font-medium text-[#efeff3]">
                        Event Location
                    </label>
                    <input type="text" name="location" id="location" 
                    placeholder="where the event held?" min="0"
                    onChange={(e) => setFormData({...formData,    location: e.target.value})}
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
    
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Date
                            </label>
                            <input type="date" name="date" id="date"
                            onChange={(e) => setFormData({...formData,    eventDate: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#efeff3]">
                                Time
                            </label>
                            <input type="time" name="time" id="time"
                            onChange={(e) => setFormData({...formData,    time: e.target.value})}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                    <div>
                        <button onClick={onEventFormData}
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
