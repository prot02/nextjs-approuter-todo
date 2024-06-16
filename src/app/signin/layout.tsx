import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログインページ",
  description: "ログインページです。",
};

export default function SigninLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>
      {children}
    </div>
  );
}
