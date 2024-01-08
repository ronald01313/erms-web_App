'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Event {
  organizerName: string;
  eventName: string;
  numberOfAttendees: number;
  location: string;
  eventDate: string;
  time: string;
}

export default function ViewEventPage() {
  const [eventData, setEventData] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/event/eventSave'); // Change to GET request
        setEventData(response.data.status); // Assuming response.data.status holds event data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const goToDashboard = (id: string) => {
    router.push(`/EventOrgProfile/${id}`); // Navigate to the Dashboard route with the ID
  };


  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-2xl font-bold mb-4">Event Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Organizer Name</th>
              <th className="py-2 px-4 border">Event Name</th>
              <th className="py-2 px-4 border">Attendees</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {eventData.map((event, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{event.organizerName}</td>
                <td className="py-2 px-4 border">{event.eventName}</td>
                <td className="py-2 px-4 border">{event.numberOfAttendees}</td>
                <td className="py-2 px-4 border">{event.location}</td>
                <td className="py-2 px-4 border">{event.eventDate}</td>
                <td className="py-2 px-4 border">{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mx-auto px-4 mt-8 bg-blue text-white">
        <h1 className="text-2xl font-bold mb-4"></h1>
        {eventData.map((event, index) => (
          <button key={index} onClick={() => goToDashboard(event.organizerName)}>
            Go to Dashboard for {event.organizerName}
          </button>
        ))}
    </div>
    </div>
          
                
        
  );
            };
