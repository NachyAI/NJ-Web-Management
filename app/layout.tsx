import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NJ Web Management | Websites handled.", description: "Professional website design, maintenance, and management for growing businesses." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
