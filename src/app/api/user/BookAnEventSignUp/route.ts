import { connect } from "@/dbConfig/eventAttendeesConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import bookAnEventUser from "@/models/bookAnEventUserModels";

connect();

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
    const user = await bookAnEventUser.findOne({ email });

    if (user) {
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

    const newbookAnEventUser = new bookAnEventUser({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user profile to the database
    const savedbookAnEventUser = await newbookAnEventUser.save();
    console.log('Saved successfully:', savedbookAnEventUser);


    // Send a verification email
    // await sendEmail({ email, emailType: "VERIFY", userId: savedEventUser._id })

    return NextResponse.json({
      message: "Event User Profile created Successfully",
      success: true,
      savedbookAnEventUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
