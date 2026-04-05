import { JsonLd } from "@/components/JsonLd";
import { WhitepaperContent } from "./WhitepaperContent";

export const metadata = {
  title: "2026 自媒体事件营销实战白皮书 | 张一凡造势机构",
  description: "25,000字深度实战增长逻辑复盘。包含造势模型、三位一体增长框架、议题设计、情绪放大等核心方法论。张一凡团队操盘茅台冰淇淋、淄博烧烤等亿元级案例绝密复盘。",
  openGraph: {
    title: "2026 事件营销实战白皮书 - 全量开放",
    description: "25,000字深度实战增长逻辑复盘。包含造势模型、三位一体增长框架、议题设计、情绪放大等核心方法论。",
    type: "article",
  },
};

export default function WhitepaperPage() {
  return (
    <>
      <JsonLd />
      <WhitepaperContent />
    </>
  );
}
