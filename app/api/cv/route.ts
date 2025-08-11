import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";

async function handleRequest(code: string | null) {
  if (!code || code !== process.env.CV_DOWNLOAD_CODE) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const filePath = path.join(process.cwd(), "private", "CV.pdf");

  try {
    const fileBuffer = await readFile(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to read CV.pdf", error);
    return new NextResponse("File not found", { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  return handleRequest(code);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  return handleRequest(code);
}
