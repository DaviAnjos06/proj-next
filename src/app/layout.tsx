
import "./globals.css";
import {Header} from '../components/header/index';
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>

        <Header/>

        {children}
      </body>
    </html>
  );
}
