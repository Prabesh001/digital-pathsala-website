import { connectToDatabase } from "@/app/api/route";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";  // Import ObjectId from MongoDB

export async function GET(req, { params }) {
  const { id } = params;

  // Check if the id is a valid ObjectId
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();
    const course = await db
      .collection("Courses")
      .findOne({ _id: new ObjectId(id) }); // Convert the id to ObjectId

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
