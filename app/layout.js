import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heba A - Portfolio",
  description: "Personal Projects Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="websiteContainer">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
