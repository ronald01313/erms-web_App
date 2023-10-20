import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/eventUserModels";
import { NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password, confirmPassword } = reqBody

        //console.log(reqBody);

        //check if Evrnt Organizer is already exists
        const user = await User.findOne({email})

        if (user) {
            return NextResponse.json({error: "Event Organizer already exists"
            }, {status: 400})
        }

          // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return NextResponse.json(
            { error: "Passwords do not match" },
            { status: 400 }
            );
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)


        const newEventUser = new User({
            username,
            email,
            password: hashedPassword
            
        })
       
        const savedEventUser = await newEventUser.save()
        console.log(savedEventUser)
      


         // send Verification email
       //await sendEmail({email, emailType: "VERIFY", userId: savedEventUser._id})
     

       
        return NextResponse.json({
            message: "Event Organizer Profile created Successfully",
            success: true,
            savedEventUser
        })

       


    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500}
        )
    }
}