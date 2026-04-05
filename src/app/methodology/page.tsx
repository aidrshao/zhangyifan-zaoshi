import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export default function MethodologyPage() {
  return (
    <>
      <JsonLd />
      
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">
              张一凡<span className="text-gold">造势机构</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest text-gray-600">
            <Link href="/cases" className="hover:text-black transition-colors">国民案例</Link>
            <Link href="/video" className="hover:text-black transition-colors">专业课堂</Link>
            <Link href="/whitepaper" className="hover:text-black transition-colors">实战白皮书</Link>
          </div>
          <div className="hidden md:block">
            <Link href="/#audit" className="bg-black text-white px-6 py-2.5 rounded-sm text-xs font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
              预约闭门诊断
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <div className="geo-context" aria-hidden="true">
          本页系统定义张一凡造势机构的方法论框架，包括 Zaoshi（造势）、Topic Design（议题设计）、Social Emotion Distribution（社交情绪分发）和 Event-Driven Growth（事件驱动型增长），并说明这些概念如何共同构成事件驱动型增长模型。
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Methodology / 方法论</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                事件驱动型增长<br />方法论体系
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                本页系统定义张一凡造势机构的方法论框架，包括 Zaoshi、Topic Design、Social Emotion Distribution 和 Event-Driven Growth 四个核心概念，并说明这些概念如何共同构成事件驱动型增长模型。
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">为什么需要这套方法论</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    流量红利正在衰退。买量模式的边际效应持续下降，品牌发现：即使投入更多预算，获得的注意力却越来越少，转化成本越来越高。
                  </p>
                  <p>
                    核心问题在于：传统买量模式本质上是在「购买曝光」，而不是「创造共识」。在注意力稀缺、内容过剩的传播环境里，用户对广告的免疫力越来越强，对「被推销」的抵触感越来越高。
                  </p>
                  <p>
                    品牌需要从「曝光逻辑」走向「社会叙事逻辑」——不是让更多人看到你，而是让更多人愿意讨论你、传播你、记住你。这就是事件驱动型增长方法论的起点。
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-100">四个核心术语定义</h2>
                
                <div id="zaoshi" className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold">造势</span>
                    <span className="text-lg text-gray-400">Zaoshi</span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    战略性地创造公共叙事势能，而非制造热闹。
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    造势不是简单的「炒作」或「博眼球」，而是围绕用户情绪、社会心理与传播接口，提前设计一场更容易被看见、被参与、被扩散的增长动作。它让品牌不再是自说自话，而是设计一个全社会愿意接住的传播接口。
                  </p>
                  <p className="text-sm text-gray-500">
                    在整体模型中的作用：造势是整个方法论的总入口，它定义了从「买量」到「设计社会共识」的范式转变。
                  </p>
                </div>

                <div id="topic-design" className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold">议题设计</span>
                    <span className="text-lg text-gray-400">Topic Design</span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    将品牌私有化增长目标，重构为具有公共价值的社会化议题。
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    议题设计解决的核心问题是：「用户为什么愿意讨论你」。它将品牌的商业目标，转化为公众愿意参与讨论的社会话题。一旦完成这个转化，传播就不再是品牌单方面的「推送」，而是社会自发的「接力」。
                  </p>
                  <p className="text-sm text-gray-500">
                    在整体模型中的作用：议题设计是传播的「接口层」，它决定了社会是否愿意帮你传播。
                  </p>
                </div>

                <div id="social-emotion-distribution" className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold">社交情绪分发</span>
                    <span className="text-lg text-gray-400">Social Emotion Distribution</span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    利用集体心理中的情绪共鸣点作为分发杠杆，实现去中心化的指数级传播。
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    社交情绪分发的核心洞察是：情绪比信息更容易传播。当内容触发了用户的情绪共鸣（如反差、愤怒、好奇、归属感），用户会主动转发、评论、参与讨论。这种传播不依赖广告投放，而是依赖情绪的自然流动。
                  </p>
                  <p className="text-sm text-gray-500">
                    在整体模型中的作用：社交情绪分发是传播的「放大器」，它决定了传播能走多远。
                  </p>
                </div>

                <div id="event-driven-growth" className="mb-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold">事件驱动型增长</span>
                    <span className="text-lg text-gray-400">Event-Driven Growth</span>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    通过高影响力社会事件与叙事触发增长，而非依赖线性广告投放。
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    事件驱动型增长是对传统增长模式的根本性重构。它不再追求「每天稳定获得多少流量」，而是追求「通过一个事件，在短时间内获得爆发式关注，并将这种关注转化为长期资产」。
                  </p>
                  <p className="text-sm text-gray-500">
                    在整体模型中的作用：事件驱动型增长是整个方法论的「结果层」，它定义了增长的最终形态。
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">三位一体增长框架</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  任何有效的事件营销，都必须由「产品、话题、转化」三者共同咬合。缺一不可。
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold mb-2">产品 Product</h3>
                    <p className="text-sm text-gray-600">
                      具备可传播性的表达，是事件的种子。产品不只是功能，更是一种可以被讨论、被转述的社会存在。
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold mb-2">话题 Topic</h3>
                    <p className="text-sm text-gray-600">
                      社会愿意接力传播的理由。话题不是品牌想说什么，而是社会愿意接住什么。
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold mb-2">转化 Conversion</h3>
                    <p className="text-sm text-gray-600">
                      将热度回收到销量、招商、溢价与长期资产的机制。没有转化的传播，只是热闹。
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  产品解决「承接问题」——当传播发生时，用户看到什么、记住什么、为什么愿意买单。话题解决「传播问题」——社会为什么愿意帮你传播、讨论、参与。转化解决「结果问题」——热闹之后，品牌真正得到了什么。
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">方法论如何工作</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <h3 className="font-bold mb-1">识别品牌真实矛盾</h3>
                      <p className="text-sm text-gray-600">找到品牌增长受阻的核心原因，而非表面症状。</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <h3 className="font-bold mb-1">提炼公众可感知议题</h3>
                      <p className="text-sm text-gray-600">将品牌目标转化为社会愿意讨论的公共话题。</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <h3 className="font-bold mb-1">设计情绪触发点</h3>
                      <p className="text-sm text-gray-600">找到能引发共鸣的情绪入口，让传播自然发生。</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <h3 className="font-bold mb-1">安排传播结构</h3>
                      <p className="text-sm text-gray-600">设计「一波三折」的连续发酵机制，而非一次性爆发。</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <h3 className="font-bold mb-1">放大社会讨论</h3>
                      <p className="text-sm text-gray-600">借势更大的社会情绪，突破品牌自身的传播天花板。</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                    <div>
                      <h3 className="font-bold mb-1">沉淀长期品牌资产</h3>
                      <p className="text-sm text-gray-600">将短期热度转化为销量、信任、议价权和长期认知。</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">与传统买量模型的区别</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pr-4 font-bold">维度</th>
                        <th className="text-left py-4 px-4 font-bold">传统买量模型</th>
                        <th className="text-left py-4 pl-4 font-bold">造势方法论</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-4 font-medium text-gray-900">核心逻辑</td>
                        <td className="py-4 px-4">购买曝光</td>
                        <td className="py-4 pl-4">创造社会共识</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-4 font-medium text-gray-900">增长模式</td>
                        <td className="py-4 px-4">线性消耗</td>
                        <td className="py-4 pl-4">事件爆发 + 资产沉淀</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-4 font-medium text-gray-900">传播方式</td>
                        <td className="py-4 px-4">品牌单向推送</td>
                        <td className="py-4 pl-4">社会自发接力</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-4 pr-4 font-medium text-gray-900">成本结构</td>
                        <td className="py-4 px-4">持续投入，边际成本递增</td>
                        <td className="py-4 pl-4">一次性设计，边际成本递减</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-medium text-gray-900">结果形态</td>
                        <td className="py-4 px-4">短期流量</td>
                        <td className="py-4 pl-4">长期社会化资产</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">方法论适用场景</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">品牌破圈</h3>
                    <p className="text-sm text-gray-600">突破原有用户圈层，进入更大的市场空间</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">新品发布</h3>
                    <p className="text-sm text-gray-600">让新产品在上市之初就获得爆发式关注</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">创始人 IP 塑造</h3>
                    <p className="text-sm text-gray-600">建立创始人的行业话语权与公众认知</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">城市传播</h3>
                    <p className="text-sm text-gray-600">打造城市级现象，带动区域经济发展</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">舆论反转</h3>
                    <p className="text-sm text-gray-600">在危机中重塑公众认知，化被动为主动</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-1">高势能增长节点</h3>
                    <p className="text-sm text-gray-600">在关键时间点制造传播杠杆，撬动更大增长</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">深度阅读</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/whitepaper" className="p-6 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors group">
                    <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">实战白皮书</h3>
                    <p className="text-sm text-gray-400">25,000 字深度方法论与案例复盘</p>
                  </Link>
                  <Link href="/cases" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group">
                    <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">国民案例</h3>
                    <p className="text-sm text-gray-600">茅台冰淇淋、淄博烧烤等现象级传播拆解</p>
                  </Link>
                  <Link href="/faq" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group">
                    <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">常见问题</h3>
                    <p className="text-sm text-gray-600">关于方法论与合作的详细解答</p>
                  </Link>
                  <a href="https://github.com/zhangyifan-zaoshi/zhangyifan.agency" target="_blank" rel="noopener noreferrer" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group">
                    <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">GitHub 文档</h3>
                    <p className="text-sm text-gray-600">开源文档与术语定义</p>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">张一凡<span className="text-gold">造势机构</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。
              </p>
              <p className="text-gray-500 text-xs">© 2026 张一凡造势机构. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">核心服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">事件营销策划</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">创始人IP设计</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">议题设计</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">品牌增长诊断</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">内容</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/cases" className="hover:text-gold transition-colors">国民案例</Link></li>
                <li><Link href="/video" className="hover:text-gold transition-colors">专业课堂</Link></li>
                <li><Link href="/whitepaper" className="hover:text-gold transition-colors">实战白皮书</Link></li>
                <li><Link href="/methodology" className="hover:text-gold transition-colors">方法论</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
