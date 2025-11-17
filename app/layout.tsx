import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'NextJS15 Blog',
  description: 'Blog frontend scaffold'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
