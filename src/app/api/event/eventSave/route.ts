// pages/api/events.ts
import { NextRequest, NextResponse } from "next/server";
import event from "@/models/eventFormDataModels";
import { connect } from "@/dbConfig/dbConfig";


connect();

export async function GET(request: NextRequest) {

    try {
        
        const User = await event.findOne({_id: event}).
        select("-eventName");
        return NextResponse.json({
            message: "Event found",
            data: event
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 400});
    }
}


