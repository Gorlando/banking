// Import NextResponse (like importing a response formatter in Python)
import { NextResponse } from "next/server";

// Force route to be dynamic (like telling pandas not to cache data)
// Similar to: pd.read_csv('data.csv', cache=False)
export const dynamic = "force-dynamic";

// Create an API endpoint function (like creating an error test function in Python)
// Similar to:
// def test_error_logging():
//     raise Exception("Testing Error Logger")
export function GET() {
 // Deliberately throw an error (like raising an exception in Python)
 // Similar to:
 // raise Exception("Test Error")
 throw new Error("Sentry Example API Route Error");

 // This code never runs (like code after a Python exception)
 return NextResponse.json({ data: "Testing Sentry Error..." });
}