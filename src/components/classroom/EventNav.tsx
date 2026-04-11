'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Course } from '@/types/course';

interface EventNavProps {
  courses: Course[];
  currentVideoId: string;
}

export function EventNav({ courses, currentVideoId }: EventNavProps) {
  const router = useRouter();
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentCourse = courses.find((course) =>
      course.videos.some((video) => video.id === currentVideoId)
    );
    if (currentCourse) {
      setExpandedCourses((prev) => new Set(prev).add(currentCourse.id));
    }
  }, [currentVideoId, courses]);

  const toggleCourse = (courseId: string) => {
    setExpandedCourses((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  };

  const handleVideoClick = (videoId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    router.push(`/classroom/${videoId}`);
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-gold text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="打开课程导航"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`
          fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-[#0a0a0a] border-r border-white/5
          transform transition-transform duration-300 ease-in-out z-40
          lg:transform-none overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
            课程目录
          </h2>

          <div className="space-y-2">
            {courses.map((course) => {
              const isExpanded = expandedCourses.has(course.id);
              const hasCurrentVideo = course.videos.some((v) => v.id === currentVideoId);

              return (
                <div key={course.id} className="space-y-1">
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg
                      transition-all duration-200 text-left group
                      ${hasCurrentVideo
                        ? 'bg-gold/10 text-gold'
                        : 'hover:bg-white/5 text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    <span className="font-medium truncate pr-2">{course.shortTitle}</span>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      } ${hasCurrentVideo ? 'text-gold' : 'text-gray-500 group-hover:text-white'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {course.videos.map((video) => {
                        const isCurrentVideo = video.id === currentVideoId;

                        return (
                          <Link
                            key={video.id}
                            href={`/classroom/${video.id}`}
                            onClick={(e) => handleVideoClick(video.id, e)}
                            className={`
                              block px-4 py-2.5 rounded-md text-sm transition-all duration-200
                              ${isCurrentVideo
                                ? 'bg-gold text-black font-medium'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }
                            `}
                          >
                            <div className="flex items-center gap-2">
                              {isCurrentVideo && (
                                <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M4.5 3.5l11 6.5-11 6.5V3.5z" />
                                </svg>
                              )}
                              <span className="truncate">{video.title}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-xs opacity-60">
                              <span>{video.duration}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
