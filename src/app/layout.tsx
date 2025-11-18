import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://use.typekit.net/voy8qlb.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SwingLeft Interview</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
