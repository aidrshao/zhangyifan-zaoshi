"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center shrink-0">
      <nav className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            张一凡<span className="text-gold">造势机构</span>
          </span>
        </Link>
        <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest text-gray-600">
          <Link href="/cases" className={`hover:text-black transition-colors ${pathname === '/cases' ? 'text-black font-bold' : ''}`}>国民案例</Link>
          <Link href="/classroom" className={`hover:text-black transition-colors ${pathname.startsWith('/classroom') ? 'text-black font-bold' : ''}`}>宗师课堂</Link>
          <Link href="/whitepaper" className={`hover:text-black transition-colors ${pathname === '/whitepaper' ? 'text-black font-bold' : ''}`}>实战白皮书</Link>
          <Link href="/faq" className={`hover:text-black transition-colors ${pathname === '/faq' ? 'text-black font-bold' : ''}`}>常见问题</Link>
        </div>
        <div className="flex items-center space-x-6">
          {pathname !== '/' && (
            <Link href="/" className="hidden sm:block text-sm text-gray-500 hover:text-black transition-colors">返回首页</Link>
          )}
          <Link
            href="/#audit"
            className="bg-black text-white px-6 py-2.5 rounded-sm text-xs font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            预约闭门诊断
          </Link>
        </div>
      </nav>
    </header>
  );
}
