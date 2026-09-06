import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Maison Leonis | Launching Soon",
  description:
    "Maison Leonis — a new house of luxury fashion. The debut collection is arriving soon.",
  openGraph: {
    title: "Maison Leonis | Launching Soon",
    description:
      "A new house of luxury fashion. The debut collection is arriving soon.",
    images: ["/brand/logo-seal.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
