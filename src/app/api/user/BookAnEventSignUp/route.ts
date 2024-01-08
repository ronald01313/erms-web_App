import { connectAttendee } from "@/dbConfig/eventAttendeesConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import bookAnEventUser from "@/models/bookAnEventUserModels";

connectAttendee();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password, confirmPassword } = reqBody;

    // Validate request body
    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Event User already exists
    const existingUser = await bookAnEventUser.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Event User Profile already exists" },
        { status: 400 }
      );
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user profile
    const newBookAnEventUser = new bookAnEventUser({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user profile to the database
    const savedBookAnEventUser = await newBookAnEventUser.save();
    console.log('Saved successfully:', savedBookAnEventUser);

    // TODO: Send a verification email

    return NextResponse.json({
      message: "Attendee User Profile created Successfully",
      success: true,
      savedBookAnEventUser,
    });
  } catch (error: any) {
    // Handle different types of errors here
    if (error.name === 'ValidationError') {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
