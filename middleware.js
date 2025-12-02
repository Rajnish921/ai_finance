export const runtime = "edge";

// Minimal middleware that only adds auth context without protection
// Protection is handled in individual routes using Clerk's auth()
import { clerkMiddleware } from "@clerk/nextjs/edge";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
