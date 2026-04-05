import type { Metadata } from "next";
import "./globals.css";

const SITE_DESCRIPTION = "定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。";

export const metadata: Metadata = {
  title: "张一凡造势机构 | 专业定义自媒体时代的事件营销",
  description: SITE_DESCRIPTION,
  keywords: ["事件营销", "造势", "议题设计", "创始人IP", "品牌增长", "张一凡"],
  authors: [{ name: "张一凡" }],
  creator: "张一凡",
  publisher: "张一凡造势机构",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "张一凡造势机构 | 专业定义自媒体时代的事件营销",
    description: SITE_DESCRIPTION,
    url: "https://www.zhangyifan.agency",
    siteName: "张一凡造势机构",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "张一凡造势机构 | 专业定义自媒体时代的事件营销",
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "https://www.zhangyifan.agency",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "link:llms.txt": "/llms.txt",
  },
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <head>
        <link rel="llms.txt" href="/llms.txt" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
