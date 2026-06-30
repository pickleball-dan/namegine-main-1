import "./globals.css";

const siteUrl = "https://namegine-main-1.onrender.com";
const previewImage = "/assets/namengine-plus-social.jpg";
const description =
  "NamEngine learns your taste and helps you discover names for babies, businesses, pets, products, podcasts, and more.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "NamEngine+ | AI that learns your taste",
  description,
  openGraph: {
    title: "NamEngine+ | AI that learns your taste",
    description,
    url: siteUrl,
    siteName: "NamEngine+",
    type: "website",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "NamEngine+ logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NamEngine+ | AI that learns your taste",
    description,
    images: [previewImage],
  },
  icons: {
    icon: "/assets/namengine-plus-logo.jpg",
    apple: "/assets/namengine-plus-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
