import "./globals.css";

export const metadata = {
  title: "NamEngine | AI that learns your taste",
  description:
    "NamEngine learns your taste and helps you discover names for babies, businesses, pets, products, podcasts, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
