import Footer from "./componenets/Footer";
import Navbar from "./componenets/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>NeuroVision - To make neuro be simply visible.</title>
        <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
