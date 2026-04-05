import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = {
  title: "宗师课堂 | 张一凡造势机构 - 视频案例复盘",
  description: "在这里，我们不讲理论，只讲实操。每一个国民级案例背后，都是一场精密设计的「势能跃迁」博弈。",
};

const videos = [
  {
    title: "深度复盘：茅台冰淇淋的 1 亿流量博弈",
    description: "解析如何利用高维度势能向下兼容，在瞬间引爆年轻群体话题。",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "哈尔滨小土豆：社会化传播的巅峰路径",
    description: "从地域偏见到全民共振，我们如何通过情绪反差设计引爆点。",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "淄博烧烤：城市级现象的底层逻辑",
    description: "拆解一个城市如何通过议题设计成为全国性话题。",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "李剑怼美团：冲突化IP设计的完整路径",
    description: "如何将一场冲突升级为行业话语权，实现商业闭环。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function VideoPage() {
  return (
    <>
      <JsonLd />

      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase italic">
            Zaoshi<span className="text-gold">.</span>
          </Link>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">返回首页</Link>
            <Link href="/whitepaper" className="hover:text-white transition-colors">实战白皮书</Link>
          </div>
        </nav>
      </header>

      <main className="bg-[#0a0a0a] text-white pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">宗师课堂</h1>
            <p className="text-gray-500 max-w-2xl text-lg">
              在这里，我们不讲理论，只讲实操。每一个国民级案例背后，都是一场精密设计的「势能跃迁」博弈。
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 relative flex items-center justify-center mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-30 group-hover:opacity-60 transition-all"
                    style={{ backgroundImage: `url('${video.image}')` }}
                  ></div>
                  <div className="z-10 w-16 h-16 bg-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4.5 3.5l11 6.5-11 6.5V3.5z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{video.title}</h3>
                <p className="text-gray-500 text-sm">{video.description}</p>
              </article>
            ))}
          </div>

          <section className="mt-24 p-12 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">想要更深入的学习？</h2>
                <p className="text-gray-400">获取完整白皮书，掌握事件营销的完整方法论。</p>
              </div>
              <Link
                href="/whitepaper"
                className="bg-gold text-black px-8 py-4 rounded-sm font-bold hover:scale-105 transition-all text-sm uppercase tracking-widest whitespace-nowrap"
              >
                获取实战白皮书
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© 2026 张一凡造势机构. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
