import { connect } from "@/dbConfig/eventAttendeesConfig";
import { NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import bookAnEventUser from "@/models/bookAnEventUserModels";

connect()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if event organizer exist
        const user = await bookAnEventUser.findOne({email})
        if(!user) {
            return NextResponse.json({error: "Event User Profile does not exist"
            }, {status: 400})
        }
        console.log("Event User Profile exist");

        //check if password is correct
        const validPassword = await bcryptjs.compare
        (password, user.password)
        if(!validPassword) {
            return NextResponse.json({
                error: "Invalid password" }, {status: 400})
        }

        //create token data
        const tokenData = {
            id: user._id,
            email: user.email
        }
        
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_BOOK!, { expiresIn: "1d" })
    
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
           
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;


    } catch (error: any) {
        return NextResponse.json({error: error.message
        }, {status: 500})
    }
}