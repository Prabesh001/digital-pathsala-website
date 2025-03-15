import { connectToDatabase } from "@/app/api/route";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit"));
    const reviews = await db
      .collection("Reviews")
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
