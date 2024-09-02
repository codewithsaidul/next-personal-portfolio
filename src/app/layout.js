import { Inter } from "next/font/google";
import "./globals.css";
// import "./venobox.min.css"
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mx-auto flex md:w-full w-[90%]  max-w-screen-xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
            <Navbar />

            {children}
        </div>
      </body>
    </html>
  );
}
