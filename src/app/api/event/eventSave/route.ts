// pages/api/events.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/dbConfig/dbConfig'; // Import your MongoDB connection
import { Event } from '@/types'; // Import your Event interface
import eventSave from '@/models/eventFormDataModels'; // Import your eventSave model

connect(); // Connect to MongoDB

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const eventData: Event[] = await eventSave.find({}).lean(); // Fetch all event data from MongoDB

      res.status(200).json(eventData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data from MongoDB' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
