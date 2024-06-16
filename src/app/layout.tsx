import { Inter } from "next/font/google";
import "src/style/globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
