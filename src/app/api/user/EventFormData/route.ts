import { connect } from "@/dbConfig/eventFormData";
import EventFormData from "@/models/eventFormDataModels";
import { NextRequest, NextResponse } from 'next/server';

connect();

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

    if (!organizerName || !eventName || !eventDate) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    const newEventFormData = new EventFormData({
      organizerName,
      eventName,
      numberOfAttendees,
      location,
      eventDate,
      time,
    });

    const savedEventFormData = await newEventFormData.save();

    return NextResponse.json({
      message: "Event details saved successfully",
      success: true,
      savedEventFormData
  })

 


} catch (error: any) {
  return NextResponse.json({error: error.message},
      {status: 500}
  )
}
}

    