import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dionysos</title>
        <meta name="title" content="Dionysos" />
        <meta
          name="description"
          content="Wine Cellar Manager by FreezingKas. Add and remove bottles in your cellar with a click."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wine.freezingkas.com" />
        <meta property="og:title" content="Dionysos" />
        <meta
          property="og:description"
          content="Wine Cellar Manager by FreezingKas. Add and remove bottles in your cellar with a click."
        />
        <meta property="og:image" content="/bg-meta.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wine.freezingkas.com" />
        <meta property="twitter:title" content="Dionysos" />
        <meta
          property="twitter:description"
          content="Wine Cellar Manager by FreezingKas. Add and remove bottles in your cellar with a click."
        />
        <meta property="twitter:image" content="/bg-meta.jpg" />

        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
