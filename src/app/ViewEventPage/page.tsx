// pages/display-events.tsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Event } from '@/types'; // Import your Event interface

const DisplayEvents = () => {
  const [eventData, setEventData] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/event'); // Fetch data from the API route
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Event Data</h1>
      <ul>
        {eventData.map((event: Event) => (
          <li key={event._id.$oid}>
            <p>Organizer Name: {event.organizerName}</p>
            <p>Event Name: {event.eventName}</p>
            {/* Display other event details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayEvents;
