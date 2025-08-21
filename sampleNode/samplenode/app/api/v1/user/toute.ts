import { NextRequest, NextResponse } from "next/server";

export  function GET(){
    return NextResponse.json({
        message:{
            "username":"Karthik",
            "status":"Get is successful"
        }
    });
}

export  function POST(req:NextRequest){
    return NextResponse.json({
        message:{
            "username":"Karthik",
            "status":"Post is successful"
        }
    });
}