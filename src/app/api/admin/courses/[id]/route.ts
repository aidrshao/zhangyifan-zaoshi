import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Course } from '@/types/course';

const dataFilePath = path.join(process.cwd(), 'data', 'course.json');

async function readCourses(): Promise<{ courses: Course[] }> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { courses: [] };
  }
}

async function writeCourses(data: { courses: Course[] }): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await readCourses();
    const course = data.courses.find(c => c.id === id);
    
    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ error: '读取课程数据失败' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates: Partial<Course> = await request.json();
    const data = await readCourses();
    
    const index = data.courses.findIndex(c => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    data.courses[index] = { ...data.courses[index], ...updates };
    await writeCourses(data);
    
    return NextResponse.json(data.courses[index]);
  } catch (error) {
    return NextResponse.json({ error: '更新课程失败' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await readCourses();
    
    const index = data.courses.findIndex(c => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    data.courses.splice(index, 1);
    await writeCourses(data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '删除课程失败' }, { status: 500 });
  }
}
