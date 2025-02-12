import ThemeCookieHandler from "./theme-cookie-handler";
import "../styles/globals.css";
import type React from "react";



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light-mode-white">
          <ThemeCookieHandler>{children}</ThemeCookieHandler>
      </body>
    </html>
  );
}


