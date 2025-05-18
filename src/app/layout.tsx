
import "./globals.css";
import {Header} from '../components/header/index';
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tudo Gostoso Clone',
  description: 'Clone de site de receitas em Next.js'
}

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
