// Tell Next.js this runs in browser (like running Python script locally)
"use client";

// Import error tracking tools (like importing logging in Python)
// Similar to: import logging
import * as Sentry from "@sentry/nextjs";
// Import error page component
import Error from "next/error";
// Import useEffect (like importing a Python function that runs on startup)
import { useEffect } from "react";

// Create error handling component (like creating error handler in Python)
// Similar to:
// def handle_global_error(error):
//     logging.error(error)
export default function GlobalError({ error }) {
 // Run when error occurs (like a Python error logger)
 // Similar to:
 // def log_error(error):
 //     logging.error(error)
 useEffect(() => {
   // Send error to Sentry (like logging error in Python)
   Sentry.captureException(error);
 }, [error]);  // Run when error changes

 // Show error page (like printing error message in Python)
 return (
   <html>
     <body>
       <Error />
     </body>
   </html>
 );
}