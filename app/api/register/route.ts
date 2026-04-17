import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // LOGIC: This is where you would use a tool like 'Prisma' or 'Mongoose'
  // to save 'body.name', 'body.email', etc., to your database.
  
  console.log("Saving to DB:", body);

  return NextResponse.json({ message: "Student registered successfully!" }, { status: 200 });
}
