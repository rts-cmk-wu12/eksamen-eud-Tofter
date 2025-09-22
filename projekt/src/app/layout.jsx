import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "SwapHub to swap with other swappers - swippidy swappedy swoop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
