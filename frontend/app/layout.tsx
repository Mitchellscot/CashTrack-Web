import Script from "next/script"
import {Header} from "./components/Header/Header";
//import theme from './lib/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css" rel="stylesheet" />
        <title>CashTrack</title>
        <meta name="description" content="Cash Track - a budgeting app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {/* <Script src="~/js/theme.js"></Script> */}

        {children}
      </body>
    </html>
  )
}