import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "旅费有数 · 出发前先知道要花多少", description: "旅行预算规划器" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
