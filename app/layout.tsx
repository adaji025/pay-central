import "@mantine/core/styles.css";
import React from "react";
import { Spline_Sans } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "./global.css";

export const metadata = {
  title: "Pay Central - Wait list",
  description: "I am using Mantine with Next.js!",
};
const spline_sans = Spline_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={`${spline_sans.className} bg-white`}>
        <MantineProvider
          theme={{
            primaryColor: "blue",
            fontFamily: "Poppins, sans-serif",
            defaultRadius: 8,
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
