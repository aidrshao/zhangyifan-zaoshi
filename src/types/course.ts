export interface Video {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  videoUrl: string;
  coverImage: string;
  duration: string;
  summary: string;
  transcript: string;
  tags: string[];
  publishDate: string;
}

export interface Course {
  id: string;
  eventName: string;
  shortTitle: string;
  eventDescription: string;
  videos: Video[];
}

export interface CourseData {
  courses: Course[];
}

export interface VideoWithCourse extends Video {
  course: Course;
}

export function isCourse(data: unknown): data is Course {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'eventName' in data &&
    'shortTitle' in data &&
    'eventDescription' in data &&
    'videos' in data &&
    Array.isArray((data as Course).videos)
  );
}

export function isVideo(data: unknown): data is Video {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'title' in data &&
    'description' in data &&
    'videoUrl' in data &&
    'coverImage' in data &&
    'duration' in data &&
    'summary' in data &&
    'transcript' in data &&
    'tags' in data &&
    'publishDate' in data
  );
}
