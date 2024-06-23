import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";


// On the server
export async function GET(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)
      return NextResponse.json({ authenticated: true, user: decoded});
    } else {
      return NextResponse.json({ authenticated: false });
    }
  }
