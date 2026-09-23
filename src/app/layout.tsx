import type { Metadata } from "next";
import "./globals.css";


import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { AuthProvider } from "@/context/AuthContext";



export const metadata: Metadata = {
  title: "KampusDesa Psychology Center",
  description:
    "Layanan konsultasi psikologi profesional secara online bersama psikolog terpercaya.",
};




export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (


    <html lang="id">


      <body className="antialiased">


        <AuthProvider>


          {/* Informasi paling atas */}

          <TopBar />



          {/* Navigasi utama */}

          <Navbar />




          {/* Isi halaman */}

          <main>

            {children}

          </main>





          {/* Footer */}

          <Footer />


        </AuthProvider>



      </body>


    </html>


  );

}