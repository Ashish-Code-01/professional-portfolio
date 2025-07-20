import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Foorter.jsx";
import { Suspense } from 'react';
import Loading from '../components/Loader';
import Chatbot from "../components/chatbot/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashish Vishwakarma Portfolio",
  description: "This is the personal portfolio for the Full Stack Web Debeloper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
        </Suspense>
      </body>
    </html>
  );
}
