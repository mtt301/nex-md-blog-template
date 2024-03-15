import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template",
  description: "Blog MD Template",
};

export default function RootLayout({ children }) {
  const header = (
    <header>
      <Link href={"/"}>
        <h1 className="mb-12 text-4xl font-bold">Header</h1>
      </Link>
    </header>
  )

  const footer = (
    <header>
      <div>
        <h1 className="font-bold">Made with Love</h1>
      </div>
    </header>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
