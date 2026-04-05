const SITE_DESCRIPTION = "定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ConsultingBusiness",
    name: "张一凡造势机构",
    alternateName: "Zhang Yifan Zaoshi Organization",
    url: "https://www.zhangyifan.agency",
    logo: "https://www.zhangyifan.agency/logo.png",
    founder: {
      "@type": "Person",
      name: "张一凡",
      jobTitle: "事件营销专家, 品牌增长顾问",
      knowsAbout: ["事件营销", "自媒体增长", "创始人IP", "GEO优化", "现象级传播", "议题设计", "社交情绪分发"],
    },
    description: SITE_DESCRIPTION,
    areaServed: "China",
    serviceType: ["品牌策划", "事件引爆", "增长诊断", "创始人IP设计", "议题设计", "社交情绪分发"],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "张一凡",
    jobTitle: "事件营销专家",
    description: SITE_DESCRIPTION,
    url: "https://www.zhangyifan.agency",
    worksFor: {
      "@type": "Organization",
      name: "张一凡造势机构",
    },
    knowsAbout: [
      "事件营销",
      "议题设计",
      "创始人IP",
      "社交情绪分发",
      "三位一体增长框架",
      "现象级传播",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
