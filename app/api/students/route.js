import { connectToDatabase } from "@/app/api/route";
// import Student from "@/models/Students";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit"));
    const reviews = await db
      .collection("Students")
      .find({})
      .limit(limit)
      .toArray();
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();

  try {
    const { db } = await connectToDatabase();
    const newStudent = await db.collection("Students").insertOne(body);

    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
