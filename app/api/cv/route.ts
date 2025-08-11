import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';          // <- needed for fs access on Vercel
export const dynamic = 'force-dynamic';   // <- API should be dynamic

async function handleRequest(code: string | null) {
  if (!code || code !== process.env.CV_DOWNLOAD_CODE) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // File lives in your repo: /private/CV.pdf
  const filePath = path.join(process.cwd(), 'private', 'CV.pdf');

  try {
    const fileBuffer = await readFile(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="CV.pdf"',
      },
    });
  } catch (err) {
    console.error('Failed to read CV.pdf', err);
    return new NextResponse('File not found', { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  return handleRequest(code ?? null);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  return handleRequest(code);
}
