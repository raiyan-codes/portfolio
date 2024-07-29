import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }

  return new NextResponse(null, { status: 202 });
}
