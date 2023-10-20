import { getDataFromToken } from "@/helpers/getDatafromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/eventUserModels";
import { connect } from "@/dbConfig/dbConfig";


connect();

export async function GET(request: NextRequest) {

    try {
        const eventUserID = await getDataFromToken(request);
        const user = await User.findOne({_id: eventUserID}).
        select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 400});
    }
}


