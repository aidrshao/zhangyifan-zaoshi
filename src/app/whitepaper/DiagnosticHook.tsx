"use client";

import Link from "next/link";

interface DiagnosticHookProps {
  question: string;
  hint: string;
}

export function DiagnosticHook({ question, hint }: DiagnosticHookProps) {
  return (
    <div className="mt-20 p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold mb-2">{question}</p>
          <p className="text-gray-500 text-sm">{hint}</p>
        </div>
        <Link
          href="/#audit"
          className="shrink-0 bg-black text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-gray-800 transition-all whitespace-nowrap"
        >
          预约 15 分钟诊断
        </Link>
      </div>
    </div>
  );
}
