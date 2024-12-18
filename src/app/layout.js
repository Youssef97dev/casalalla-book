import "./globals.css";

export const metadata = {
  title: "Casa Lalla",
  description: "Casa Lalla day pass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
