import courseData from '@/data/course.json';
import type { Course, CourseData, VideoWithCourse } from '@/types/course';

export function getCourseData(): CourseData {
  return courseData as CourseData;
}

export function getAllCourses(): Course[] {
  const data = getCourseData();
  return data.courses;
}

export function getCourseById(courseId: string): Course | undefined {
  const courses = getAllCourses();
  return courses.find((course) => course.id === courseId);
}

export function getVideoById(videoId: string): VideoWithCourse | undefined {
  const courses = getAllCourses();
  
  for (const course of courses) {
    const video = course.videos.find((v) => v.id === videoId);
    if (video) {
      return {
        ...video,
        course,
      };
    }
  }
  
  return undefined;
}

export function getAllVideos(): VideoWithCourse[] {
  const courses = getAllCourses();
  const videos: VideoWithCourse[] = [];
  
  for (const course of courses) {
    for (const video of course.videos) {
      videos.push({
        ...video,
        course,
      });
    }
  }
  
  return videos;
}

export function getVideoIds(): string[] {
  const videos = getAllVideos();
  return videos.map((video) => video.id);
}

export function getFirstVideo(): VideoWithCourse | undefined {
  const videos = getAllVideos();
  return videos[0];
}

export function getFirstTwoVideos(): VideoWithCourse[] {
  const videos = getAllVideos();
  return videos.slice(0, 2);
}

export function formatDurationToISO8601(duration: string): string {
  const parts = duration.split(':');
  if (parts.length !== 2) {
    return 'PT0S';
  }
  
  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);
  
  let result = 'PT';
  if (minutes > 0) {
    result += `${minutes}M`;
  }
  if (seconds > 0) {
    result += `${seconds}S`;
  }
  
  return result || 'PT0S';
}

export function getAdjacentVideos(currentVideoId: string): {
  previous: VideoWithCourse | undefined;
  next: VideoWithCourse | undefined;
} {
  const videos = getAllVideos();
  const currentIndex = videos.findIndex((v) => v.id === currentVideoId);
  
  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }
  
  return {
    previous: currentIndex > 0 ? videos[currentIndex - 1] : undefined,
    next: currentIndex < videos.length - 1 ? videos[currentIndex + 1] : undefined,
  };
}
