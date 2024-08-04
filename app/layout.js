import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({ weight: ['400'], subsets: ["latin"] });

export const metadata = {
  title: "Hec the Handyman",
  description: "Professional handyman services in Temple, TX and surrounding areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={michroma.className}>{children}</body>
    </html>
  );
}