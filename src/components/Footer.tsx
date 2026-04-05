"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
              张一凡<span className="text-gold ml-1">造势机构</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              定义自媒体时代的事件营销。通过议题设计、情绪放大与社会化传播链路构建，为品牌及创始人提供增长设计服务。
            </p>
            <p className="text-gray-500 text-xs">© 2026 张一凡造势机构. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-gold/80">核心服务 / SERVICES</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/#audit" className="hover:text-gold transition-colors">事件营销策划</Link></li>
              <li><Link href="/#audit" className="hover:text-gold transition-colors">创始人IP设计</Link></li>
              <li><Link href="/#audit" className="hover:text-gold transition-colors">议题设计</Link></li>
              <li><Link href="/#audit" className="hover:text-gold transition-colors">品牌增长诊断</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-gold/80">精彩内容 / CONTENT</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/cases" className="hover:text-gold transition-colors">国民案例</Link></li>
              <li><Link href="/video" className="hover:text-gold transition-colors">专业课堂</Link></li>
              <li><Link href="/whitepaper" className="hover:text-gold transition-colors">实战白皮书</Link></li>
              <li><Link href="/methodology" className="hover:text-gold transition-colors">实测方法论</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
