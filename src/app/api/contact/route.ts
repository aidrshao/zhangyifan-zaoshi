import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, stage, requirement, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "姓名为必填项" },
        { status: 400 }
      );
    }

    const lead = await createLead({
      name: name.trim(),
      company: company?.trim(),
      stage: stage?.trim(),
      requirement: requirement?.trim(),
      message: message?.trim(),
    });

    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "提交失败，请稍后重试" },
      { status: 500 }
    );
  }
}
