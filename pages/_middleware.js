import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/clients-for-life") {
    return NextResponse.redirect("/clients-for-life/family-1");
  }

  return NextResponse.next();
}
