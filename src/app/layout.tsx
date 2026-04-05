import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张一凡造势机构 | 专业定义自媒体时代的事件营销",
  description: "定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。",
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
    description: "定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。",
    url: "https://www.zhangyifan.agency",
    siteName: "张一凡造势机构",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "张一凡造势机构",
    description: "定义自媒体时代的事件营销",
  },
  alternates: {
    canonical: "https://www.zhangyifan.agency",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
