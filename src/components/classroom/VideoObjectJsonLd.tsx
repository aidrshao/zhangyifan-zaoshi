import type { VideoWithCourse } from '@/types/course';
import { formatDurationToISO8601 } from '@/lib/course';

interface VideoObjectJsonLdProps {
  video: VideoWithCourse;
}

export function VideoObjectJsonLd({ video }: VideoObjectJsonLdProps) {
  const videoObject = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.coverImage,
    uploadDate: video.publishDate,
    duration: formatDurationToISO8601(video.duration),
    contentUrl: video.videoUrl,
    transcript: video.transcript,
    publisher: {
      '@type': 'Organization',
      name: '张一凡造势机构',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zhangyifan.agency/logo.png',
      },
    },
    author: {
      '@type': 'Person',
      name: '张一凡',
      jobTitle: '事件营销专家',
    },
    keywords: video.tags.join(', '),
    isPartOf: {
      '@type': 'Course',
      name: video.course.eventName,
      description: video.course.eventDescription,
    },
  };

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: 'https://www.zhangyifan.agency',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '宗师课堂',
        item: 'https://www.zhangyifan.agency/classroom',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: video.course.shortTitle,
        item: `https://www.zhangyifan.agency/classroom/${video.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObject) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
