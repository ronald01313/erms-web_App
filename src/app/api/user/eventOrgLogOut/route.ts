import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  try {
    const response = NextResponse.json({
      message: "Logout Successful",
      success: true,
    });

    // Clearing the token by setting an expired date in the past
    response.cookies.set("TOKEN_USER", "", { httpOnly: true, expires: new Date(0) });

    response.headers.set('Cache-Control', 'no-store, max-age=0');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');

    return response;
  } catch (error: unknown) {
    console.error("Logout Error:", error);
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
