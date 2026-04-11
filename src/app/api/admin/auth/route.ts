import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'zhangyifan2024';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    if (password === ADMIN_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set('admin-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7
      });
      
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: '密码错误' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: '登录失败' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const auth = cookieStore.get('admin-auth');
    
    return NextResponse.json({ authenticated: auth?.value === 'true' });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin-auth');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '登出失败' }, { status: 500 });
  }
}
