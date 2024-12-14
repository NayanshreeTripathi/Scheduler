import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling app",
};

export default function RootLayout({ children}) {
  return (
    <ClerkProvider  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*header */}
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50">
            {children}
        </main>
        {/* footer */}
        <footer className="bg-slate-900 py-10 text-white">
          <div className="container mx-auto px-4 pb-6 text-center">
            <p>Schedule your day with schedulrr</p>
          </div>
        </footer>
          
      </body>
    </html>
    </ClerkProvider>
  );
}
