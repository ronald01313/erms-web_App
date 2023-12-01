// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import BookFormData from "@/models/bookFormDataModels";
import { NextRequest, NextResponse } from 'next/server';

// Establish a connection to the database
connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
        fullName,
        contactNumber,
        eventCategory,
        eventSubCategory,
        image
    } = reqBody;

    // Validate the request data
    if (!fullName || !contactNumber || !eventCategory ||!eventSubCategory || !image) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Create a new eventFormData document
    const newbookFormData = new BookFormData({
      fullName,
      contactNumber,
      eventCategory,
      eventSubCategory,
      image
    });

    // Save the event data to the database
    const savedBookFormData = await newbookFormData.save();

    return NextResponse.json({
      message: "Successfully book an Event",
      success: true,
      savedBookFormData,
    });
  } catch (error: any) {
    console.error('Schedule Data Not Saved', error);

    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: error.message }, // Send the specific validation error message
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
