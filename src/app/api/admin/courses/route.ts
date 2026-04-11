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

export async function GET() {
  try {
    const data = await readCourses();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '读取课程数据失败' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newCourse: Course = await request.json();
    const data = await readCourses();
    
    newCourse.id = newCourse.id || `course-${Date.now()}`;
    newCourse.videos = newCourse.videos || [];
    
    data.courses.push(newCourse);
    await writeCourses(data);
    
    return NextResponse.json(newCourse);
  } catch (error) {
    return NextResponse.json({ error: '创建课程失败' }, { status: 500 });
  }
}
