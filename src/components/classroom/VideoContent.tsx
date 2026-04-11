'use client';

import { useState, useMemo } from 'react';
import { VideoPlayer } from './VideoPlayer';
import type { VideoWithCourse } from '@/types/course';
import { getAdjacentVideos } from '@/lib/course';
import Link from 'next/link';

interface VideoContentProps {
  video: VideoWithCourse;
}

function formatTranscript(transcript: string): string {
  if (!transcript) return '';
  
  const sentences = transcript.split(/(?<=[。！？!?])\s*/);
  
  const paragraphs: string[] = [];
  let currentParagraph = '';
  
  for (const sentence of sentences) {
    if (!sentence.trim()) continue;
    
    currentParagraph += sentence;
    
    if (currentParagraph.length >= 100 || sentence.endsWith('。') || sentence.endsWith('！') || sentence.endsWith('？')) {
      paragraphs.push(currentParagraph.trim());
      currentParagraph = '';
    }
  }
  
  if (currentParagraph.trim()) {
    paragraphs.push(currentParagraph.trim());
  }
  
  return paragraphs.join('\n\n');
}

export function VideoContent({ video }: VideoContentProps) {
  const [isTranscriptExpanded, setIsTranscriptExpanded] = useState(false);
  const adjacentVideos = getAdjacentVideos(video.id);
  
  const formattedTranscript = useMemo(() => {
    return formatTranscript(video.transcript);
  }, [video.transcript]);

  return (
    <article className="flex-1 min-w-0">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 leading-tight">
            {video.course.eventName}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gold mb-4">
            {video.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {video.duration}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {video.publishDate}
            </span>
          </div>
        </header>

        <section aria-label="视频播放器" className="mb-10">
          <VideoPlayer
            videoUrl={video.videoUrl}
            coverImage={video.coverImage}
            videoId={video.id}
          />
        </section>

        <section aria-label="视频简介" className="mb-10">
          <p className="text-gray-300 leading-relaxed">{video.description}</p>
        </section>

        <section aria-label="核心干货摘要" className="mb-10 p-6 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl border border-white/5">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            核心干货摘要
          </h3>
          <p className="text-gray-300 leading-loose whitespace-pre-line">{video.summary}</p>
        </section>

        <section aria-label="事件描述" className="mb-10">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            关于此事件
          </h3>
          <p className="text-gray-300 leading-loose">{video.course.eventDescription}</p>
        </section>

        <section aria-label="视频转录稿" className="mb-10">
          <button
            onClick={() => setIsTranscriptExpanded(!isTranscriptExpanded)}
            className="w-full flex items-center justify-between p-6 bg-neutral-900 rounded-xl border border-white/5 hover:border-gold/30 transition-colors group"
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              完整转录稿
              <span className="text-sm font-normal text-gray-500">（点击{isTranscriptExpanded ? '收起' : '展开'}）</span>
            </h3>
            <svg
              className={`w-5 h-5 text-gray-400 group-hover:text-gold transition-transform duration-200 ${
                isTranscriptExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isTranscriptExpanded ? 'max-h-none opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-loose whitespace-pre-line text-base">
                  {formattedTranscript}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="标签" className="mb-10">
          <div className="flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-neutral-900 text-gray-400 text-sm rounded-full border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {(adjacentVideos.previous || adjacentVideos.next) && (
          <section aria-label="相邻视频导航" className="border-t border-white/5 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adjacentVideos.previous ? (
                <Link
                  href={`/classroom/${adjacentVideos.previous.id}`}
                  className="group p-4 bg-neutral-900 rounded-lg border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    上一课
                  </div>
                  <p className="font-medium text-gray-200 group-hover:text-gold transition-colors line-clamp-2">
                    {adjacentVideos.previous.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {adjacentVideos.next && (
                <Link
                  href={`/classroom/${adjacentVideos.next.id}`}
                  className="group p-4 bg-neutral-900 rounded-lg border border-white/5 hover:border-gold/30 transition-all text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                    下一课
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-200 group-hover:text-gold transition-colors line-clamp-2">
                    {adjacentVideos.next.title}
                  </p>
                </Link>
              )}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
