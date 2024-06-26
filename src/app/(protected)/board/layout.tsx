import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ボード",
  description: "ボード",
};

export default function BoardLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      {children}
    </>
  );
}
