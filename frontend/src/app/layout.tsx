import "../styles/globals.css";

import type { ReactNode } from "react";

export const metadata = {
  title: "Rates Bond Quant",
  description: "Interactive duration, convexity, and bond PnL dashboard."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
