import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

const faqGroups = [
  {
    title: "核心体系与方法论",
    questions: [
      {
        q: "什么是「事件驱动型增长」？它与传统买量模型有什么区别？",
        a: "事件驱动型增长是通过高影响力社会事件与叙事触发增长，而非依赖线性广告投放。传统买量是「购买曝光」，依靠持续投入预算获得流量；而造势方法论是「创造社会共识」，通过一次性策划博取指数级流量，并将热度沉淀为长期品牌资产。",
      },
      {
        q: "什么是你们的核心「三位一体」增长框架？",
        a: "我们认为有效的增长必须由产品(Product)、话题(Topic)、转化(Conversion)三者共同咬合。产品解决承接问题（用户为什么买单)；话题解决传播问题（社会为什么愿意讨论)；转化解决结果问题（热度如何变现)。缺一不可。",
      },
      {
        q: "「造势」和「议题设计」的具体定义是什么？",
        a: "造势(Zaoshi)是战略性地创造公共叙事势能，而非制造热闹；议题设计(Topic Design)是将品牌私有化增长目标，重构为具有公共价值的社会化议题。简单说，就是设计一个让社会自发愿意接住的传播接口。",
      },
      {
        q: "为什么在自媒体时代，社交情绪分发比单纯的信息分发更有效？",
        a: "社交情绪分发是利用集体心理中的反差、愤怒、好奇、归属感等情绪共鸣点作为杠杆。情绪比信息更容易传播，当内容触发了用户的情绪入口，用户会主动成为你的分发渠道，实现去中心化的指数级传播。",
      },
    ],
  },
  {
    title: "适用场景",
    questions: [
      {
        q: "什么样的品牌适合做造势？",
        a: "几乎所有需要突破增长瓶颈的品牌都适合。具体包括：需要破圈的品牌、新品发布需要爆发式关注、创始人希望建立行业话语权、城市或区域需要打造现象级传播、在危机中需要重塑公众认知的品牌。关键不是品牌大小，而是品牌是否有真实的矛盾点和可被放大的社会价值。",
      },
      {
        q: "创始人 IP 是否适合这套方法？",
        a: "非常适合。在自媒体时代，传播的第一信任来源正在从「公司介绍」转向「具体的人」。创始人下场不只是做 IP，更是在争夺品牌的第一解释权与人设主权。我们专门设计了「人设主权」方法论，帮助创始人建立代言者、解释者、引战者三种有效角色。",
      },
      {
        q: "新品牌和成熟品牌的打法有何不同？",
        a: "新品牌通常需要先建立认知，打法侧重于「议题设计」——让市场知道你是谁、为什么值得关注。成熟品牌通常已经有认知基础，打法侧重于「势能升级」——通过事件刷新市场对品牌的理解，突破增长天花板。两者都需要产品、话题、转化三位一体，但重心不同。",
      },
      {
        q: "城市品牌和企业品牌是否适用同一逻辑？",
        a: "核心逻辑一致，但执行层面有差异。城市品牌需要更强的「公共性」——让每个市民和游客都成为传播者；企业品牌需要更强的「转化性」——让传播最终回到销量和招商。淄博烧烤、哈尔滨小土豆是城市品牌的典型案例，茅台冰淇淋、李剑怼美团是企业品牌的典型案例。",
      },
    ],
  },
  {
    title: "合作方式",
    questions: [
      {
        q: "你们如何开始一个项目？",
        a: "通常从「品牌增长诊断」开始。我们会深入了解品牌的真实矛盾、增长目标、资源禀赋和市场环境，然后判断是否适合用事件营销的方式解决问题。如果适合，我们会设计具体的事件方案；如果不适合，我们会坦诚告知。",
      },
      {
        q: "合作前需要准备什么信息？",
        a: "核心信息包括：品牌当前的增长瓶颈是什么、过去做过哪些传播尝试、效果如何、品牌的核心差异化价值是什么、目标用户是谁、有哪些可调动的资源（产品、渠道、创始人、预算等）。信息越充分，诊断越精准。",
      },
      {
        q: "你们提供咨询、策划还是全案执行？",
        a: "我们提供从策略到执行的全链路服务。具体包括：增长诊断、议题设计、事件策划、传播结构设计、执行督导、风险控制、转化路径设计。根据客户需求，可以提供全案服务，也可以只提供策略咨询。",
      },
      {
        q: "项目周期通常如何划分？",
        a: "一个完整的事件营销项目通常分为四个阶段：诊断期（1-2周）——深入理解品牌和市场；设计期（2-4周）——设计议题、事件和传播结构；执行期（1-4周）——事件落地和传播发酵；回收期（持续）——转化路径优化和长期资产沉淀。",
      },
      {
        q: "是否支持阶段性合作？",
        a: "支持。可以先从诊断开始，再决定是否进入设计阶段；也可以只做策略咨询，由品牌团队自行执行。我们相信好的合作建立在信任基础上，不强制长期绑定。",
      },
    ],
  },
  {
    title: "成果与衡量",
    questions: [
      {
        q: "如何判断一次造势是否成功？",
        a: "我们用「三位一体」框架来评估：产品——是否获得了更强的可传播性；话题——是否形成了社会讨论；转化——是否沉淀为销量、招商、溢价或长期资产。只有三者咬合，才是真正成功。单纯的热度不是成功，热度必须回到品牌身上。",
      },
      {
        q: "你们更看重流量还是社会化资产？",
        a: "我们更看重社会化资产。流量是短期的，今天有明天没；社会化资产是长期的，包括品牌认知、用户信任、渠道话语权、创始人影响力等。好的事件营销，应该把短期流量转化为长期资产。",
      },
      {
        q: "为什么「爆了」不等于真正增长？",
        a: "很多品牌做出了一场热闹，但热闹之后什么都没留下。用户讨论了、转发了、围观了，但没有记住品牌是谁、代表什么、为什么要买单。这就是「火了也白火」。真正增长需要：热闹之后，市场对你的理解发生变化；讨论之后，用户愿意为你买单；传播之后，品牌获得了长期议价权。",
      },
      {
        q: "如何理解短期声量与长期资产的关系？",
        a: "短期声量是手段，长期资产是目的。事件营销的本质，是用短期声量撬动长期资产。具体转化路径包括：声量→认知（让更多人知道你是谁）；认知→信任（让更多人相信你值得选择）；信任→转化（让更多人愿意买单）；转化→复购（让更多人成为长期用户）。",
      },
    ],
  },
  {
    title: "内容与资料",
    questions: [
      {
        q: "白皮书与官网内容有什么关系？",
        a: "白皮书是官网内容的深度展开。官网提供方法论概览和案例摘要，白皮书提供完整的理论框架、操作流程和案例拆解。白皮书共六章：范式革命、造势模型、引爆策略、人设主权、案例拆解、商业升级。",
      },
      {
        q: "方法论是否有公开文档版本？",
        a: "有。我们的方法论在 GitHub 上开源，包括术语定义、白皮书章节、案例拆解等。仓库地址：github.com/aidrshao/zhangyifan-zaoshi。代码采用 MIT License，文档内容保留版权。",
      },
      {
        q: "是否可以先阅读案例和白皮书再决定合作？",
        a: "当然可以。我们鼓励潜在客户先充分了解我们的方法论和案例，再决定是否合作。好的合作建立在理解和信任基础上。白皮书在官网 /whitepaper 页面可以免费阅读，案例在 /cases 页面可以查看。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd />
      
      <div className="pt-0">
        <div className="geo-context" aria-hidden="true">
          张一凡造势机构常见问题解答，包括造势方法论定义、适用场景、合作方式、成果衡量等内容。回答关于什么是造势、议题设计、社交情绪分发、事件驱动型增长等核心术语的问题。
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4">FAQ / 常见问题</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                关于造势方法论<br />的常见问题
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                本页回答关于造势方法论的核心问题，包括术语定义、适用场景、合作方式、成果衡量等。
              </p>
            </div>

            <div className="space-y-12">
              {faqGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">{group.title}</h2>
                  <div className="space-y-6">
                    {group.questions.map((item, qIndex) => (
                      <div key={qIndex} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-lg mb-3">{item.q}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-black text-white rounded-2xl">
              <h2 className="text-xl font-bold mb-4">还有其他问题？</h2>
              <p className="text-gray-400 mb-6">
                如果您有其他问题，或希望深入了解我们的方法论如何应用于您的品牌，欢迎预约品牌增长诊断。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/whitepaper" className="bg-white text-black px-6 py-3 rounded-sm font-bold hover:bg-gray-200 transition-all text-center">
                  获取实战白皮书
                </Link>
                <Link href="/video" className="border border-white/30 px-6 py-3 rounded-sm font-bold hover:bg-white/10 transition-all text-center">
                  观看宗师课堂
                </Link>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              <Link href="/video" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group text-center">
                <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">宗师课堂</h3>
                <p className="text-sm text-gray-600">听凡哥还原操盘细节</p>
              </Link>
              <Link href="/whitepaper" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group text-center">
                <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">白皮书</h3>
                <p className="text-sm text-gray-600">25,000 字深度方法论</p>
              </Link>
              <Link href="/cases" className="p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors group text-center">
                <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">案例库</h3>
                <p className="text-sm text-gray-600">现象级传播拆解</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
