import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CarDoctor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="icon" href="/roda.png" type="image/x-icon" />
      </head>
      <body> 
        {children}
      </body>
    </html>
  );
}
