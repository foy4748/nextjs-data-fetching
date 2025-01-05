import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {

    const p = await params;
    console.log(p)
    const singleData = await dbConnect("practice_data").findOne({ _id: new ObjectId(p.id) })

    return Response.json(singleData)
}

export async function DELETE(req, { params }) {

    const p = await params;
    console.log(p)
    const response = await dbConnect("practice_data").deleteOne({ _id: new ObjectId(p.id) })

    return Response.json(response)
}

export async function PATCH(req, { params }) {

    const p = await params;
    console.log(p)
    const postedData = await req.json()
    const filter = { _id: new ObjectId(p.id) }
    const updatedResponse = await dbConnect("practice_data").updateOne(filter, { $set: { ...postedData } }, { upsert: true })

    return Response.json(updatedResponse)
}