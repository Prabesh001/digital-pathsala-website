import { connectToDatabase } from "@/app/api/route";
import Students from "@/models/Students";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const students = await db
      .collection("Students")
      .find({})
      .toArray();
    return NextResponse.json(students);
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
