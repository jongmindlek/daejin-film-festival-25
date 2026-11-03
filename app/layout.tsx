import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제25회 대진대학교 졸업영화제",
  description: "대진대학교 영화과 제25회 졸업영화제 공식 홈페이지",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "제25회 대진대학교 졸업영화제",
    description: "대진대학교 영화영상학과 제25회 졸업영화제",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
