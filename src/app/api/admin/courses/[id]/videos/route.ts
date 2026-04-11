import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Course, Video } from '@/types/course';

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

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;
    const newVideo: Video = await request.json();
    const data = await readCourses();
    
    const course = data.courses.find(c => c.id === courseId);
    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    newVideo.id = newVideo.id || `${courseId}-${Date.now()}`;
    course.videos.push(newVideo);
    await writeCourses(data);
    
    return NextResponse.json(newVideo);
  } catch (error) {
    return NextResponse.json({ error: '添加视频失败' }, { status: 500 });
  }
}
