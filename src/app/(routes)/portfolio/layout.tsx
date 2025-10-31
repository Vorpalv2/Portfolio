import type { Metadata } from "next";

import "../../../app/globals.css";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Me",
  description: "Welcome to my World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
