import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&max=10`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}