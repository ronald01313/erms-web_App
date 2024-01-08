import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import eventFormData from '@/models/eventFormDataModels';

export async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    try {
      await connect(); // Assuming this establishes a database connection

      const eventData = await eventFormData.find({}, 'eventName'); // Fetching only the eventName field
      
      // Extracting only the event names from eventData
      const eventNames = eventData.map((event) => event.eventName);
      
      return NextResponse.json({
        eventNames, // Sending only the event names to the frontend
      });
      
    } catch (error) {
      console.error('Error fetching event data:', error);

      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: 'Method Not Allowed' },
      { status: 405 }
    );
  }
}

// Exporting the GET method explicitly
export async function GET(req: NextRequest, res: NextResponse) {
  return handler(req, res);
}
