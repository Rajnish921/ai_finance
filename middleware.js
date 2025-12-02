export const runtime = "edge";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/edge";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/(dashboard|account|transaction)(.*)", "/(api|trpc)(.*)"],
};
