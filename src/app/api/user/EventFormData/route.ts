// Import necessary modules and models
import { connect } from "@/dbConfig/eventFormData";
import EventFormData from "@/models/eventFormDataModels";
import { NextRequest, NextResponse } from 'next/server';

// Establish a connection to the database
connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      organizerName,
      eventName,
      numberOfAttendees,
      location,
      eventDate,
      time,
    } = reqBody;

    // Validate the request data
    if (!organizerName || !eventName || !eventDate) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Create a new eventFormData document
    const newEventFormData = new EventFormData({
      organizerName,
      eventName,
      numberOfAttendees,
      location,
      eventDate,
      time,
    });

    // Save the event data to the database
    const savedEventFormData = await newEventFormData.save();

    return NextResponse.json({
      message: "Event details saved successfully",
      success: true,
      savedEventFormData,
    });
  } catch (error) {
    console.error('Event Data Not Saved', error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
