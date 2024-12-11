import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*header */}
        <Header/>
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-50">
            {children}
        </main>
        {/* footer */}
        <footer className="bg-slate-900 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <p>Schedule your day with schedulrr</p>
          </div>
        </footer>
          
      </body>
    </html>
  );
}