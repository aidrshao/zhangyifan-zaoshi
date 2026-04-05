"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      stage: formData.get("stage"),
      requirement: formData.get("requirement"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "提交失败");
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "提交失败，请稍后重试");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold mb-2">提交成功</h4>
        <p className="text-gray-500 text-sm mb-6">我们将在 24 小时内与您联系，请保持电话畅通。</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-gold font-bold text-sm hover:underline"
        >
          继续提交
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="您的姓名"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all text-sm disabled:opacity-50"
        />
        <input
          type="text"
          name="company"
          placeholder="公司/项目名称"
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all text-sm disabled:opacity-50"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          name="stage"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gold text-gray-400 text-sm disabled:opacity-50"
        >
          <option value="">品牌发展阶段</option>
          <option>初创/新锐加速期</option>
          <option>增长瓶颈/平台期</option>
          <option>传统品牌焕新期</option>
          <option>品牌二次增长咨询</option>
        </select>
        <select
          name="requirement"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gold text-gray-400 text-sm disabled:opacity-50"
        >
          <option value="">核心诉求</option>
          <option>现象级话题破圈</option>
          <option>行业领导力建立 (IP设计)</option>
          <option>新品引爆与爆单</option>
          <option>渠道加盟与招商引流</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="请简述您的品牌现状与核心挑战"
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all text-sm resize-none disabled:opacity-50"
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            提交中...
          </>
        ) : (
          "提交诊断申请"
        )}
      </button>
    </form>
  );
}
