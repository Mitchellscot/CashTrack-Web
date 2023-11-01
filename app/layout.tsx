import Script from 'next/script';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '../styles/overrides.scss';
import './global.scss';
import { Header } from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import Footer from './components/Footer/Footer';
//import theme from './lib/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>CashTrack</title>
        <meta name="description" content="Cash Track - a budgeting app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <MobileMenu />
        {/* <Script src="~/js/theme.js"></Script> */}

        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></Script>
        <Footer />
      </body>
    </html>
  );
}
