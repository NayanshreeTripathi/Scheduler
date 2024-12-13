import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isPortectedRoute = createRouteMatcher([
    "/(dashboard|events|meetings|availability)(.*)", 
]);

// Clerk Middleware for authentication and route protection
export default clerkMiddleware((auth, req) => {
    try {
        if (!auth().userId && isPortectedRoute(req)) {
            return auth().redirectToSignIn;
        }
    } catch (error) {
        console.error('Middleware Error:', error);
    }
});

// Middleware configuration
export const config = {
    matcher: [
        // Skip Next.js internals and all static files
        '/((?!_next/|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
