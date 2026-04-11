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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string; videoId: string }> }
) {
  try {
    const { id: courseId, videoId } = await params;
    const updates: Partial<Video> = await request.json();
    const data = await readCourses();
    
    const course = data.courses.find(c => c.id === courseId);
    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    const videoIndex = course.videos.findIndex(v => v.id === videoId);
    if (videoIndex === -1) {
      return NextResponse.json({ error: '视频不存在' }, { status: 404 });
    }
    
    course.videos[videoIndex] = { ...course.videos[videoIndex], ...updates };
    await writeCourses(data);
    
    return NextResponse.json(course.videos[videoIndex]);
  } catch (error) {
    return NextResponse.json({ error: '更新视频失败' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string; videoId: string }> }
) {
  try {
    const { id: courseId, videoId } = await params;
    const data = await readCourses();
    
    const course = data.courses.find(c => c.id === courseId);
    if (!course) {
      return NextResponse.json({ error: '课程不存在' }, { status: 404 });
    }
    
    const videoIndex = course.videos.findIndex(v => v.id === videoId);
    if (videoIndex === -1) {
      return NextResponse.json({ error: '视频不存在' }, { status: 404 });
    }
    
    course.videos.splice(videoIndex, 1);
    await writeCourses(data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: '删除视频失败' }, { status: 500 });
  }
}
