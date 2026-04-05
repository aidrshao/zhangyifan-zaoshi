import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "国民案例 | 张一凡造势机构 - 现象级事件营销案例复盘",
  description: "每一个现象级事件的背后，都有一套经过严密设计的社会学逻辑。深度拆解茅台冰淇淋、淄博烧烤、哈尔滨等国民级案例。",
};

const cases = [
  {
    id: "moutai",
    title: "茅台冰淇淋：100万博1亿的认知植入",
    subtitle: "高维度势能向下兼容的经典战役",
    description: "张一凡团队通过高维度势能向下兼容的核心策略，成功在年轻群体中植入白酒品牌基因，实现 1.2 亿级声量。",
    tags: ["策略：认知反差设计", "结果：1.2亿级声量", "身份：全案主理人"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "利用茅台品牌存量资产，设计「反差场」触发话题",
      "精准切入年轻群体社交场景",
      "从产品表达重构品牌认知接口",
    ],
  },
  {
    id: "zibo",
    title: "淄博烧烤：城市级现象的底层逻辑",
    subtitle: "社会情绪共鸣与多方受益的造势路径",
    description: "深度拆解城市级爆红背后的「大场景感」逻辑，分析张一凡如何通过节点布局引燃全民情绪。",
    tags: ["策略：社会情绪共鸣", "结果：全网指数级增长", "核心：逻辑推衍"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "设计社会公共性议题，让个体情绪转化为集体行动",
      "构建多方受益的利益共同体",
      "从地域偏见到全民共振的传播路径",
    ],
  },
  {
    id: "harbin",
    title: "哈尔滨小土豆：社会化传播的巅峰路径",
    subtitle: "情绪反差设计与全民参与感构建",
    description: "揭秘张一凡视角下的「社会公共性设计」，如何让个体情绪转化为集体行动逻辑。",
    tags: ["策略：情绪反差设计", "结果：现象级传播", "身份：战略顾问"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "利用地域标签制造话题张力",
      "设计用户参与接口，激发 UGC 创作",
      "从争议到共识的情绪引导",
    ],
  },
  {
    id: "lijian",
    title: "李剑怼美团：为500万餐饮老板发声",
    subtitle: "冲突化IP设计与行业话语权建立",
    description: "张一凡亲自担任战略导演，将冲突升级为行业话语权，实现不仅出圈更出单的商业闭环。",
    tags: ["策略：冲突化IP设计", "结果：行业话语权建立", "身份：战略总导演"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "将个体冲突升级为行业议题",
      "为创始人建立「代言人」IP 人设",
      "从话题热度到商业转化的完整闭环",
    ],
  },
];

export default function CasesPage() {
  return (
    <>
      <JsonLd />

      <div className="pt-0">
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <header className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">国民级案例实战复盘</h1>
              <p className="text-gray-500 text-xl max-w-3xl">
                每一个现象级事件的背后，都有一套经过严密设计的社会学逻辑。我们不只是复盘结果，更是拆解背后的设计思维。
              </p>
            </header>

            <div className="space-y-16">
              {cases.map((caseItem) => (
                <article key={caseItem.id} className="group">
                  <div className="flex flex-col lg:flex-row gap-10 p-10 rounded-3xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all">
                    <div className="lg:w-2/5">
                      <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                          style={{ backgroundImage: `url('${caseItem.image}')` }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-2xl">
                            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4.5 3.5l11 6.5-11 6.5V3.5z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-center">
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {caseItem.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gold/10 text-gold px-3 py-1 rounded text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gold transition-colors">
                        {caseItem.title}
                      </h2>
                      <p className="text-gray-500 mb-4">{caseItem.subtitle}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{caseItem.description}</p>
                      <ul className="space-y-2">
                        {caseItem.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">想要掌握这些案例背后的方法论？</h2>
            <p className="text-gray-500 mb-10 text-lg">
              获取 2026 事件营销实战白皮书，深入学习造势模型与三位一体增长框架。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/whitepaper"
                className="bg-black text-white px-8 py-4 rounded-sm font-bold hover:bg-gray-800 transition-all"
              >
                获取实战白皮书
              </Link>
              <Link
                href="/video"
                className="border border-black px-8 py-4 rounded-sm font-bold hover:bg-black hover:text-white transition-all"
              >
                观看案例视频
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
