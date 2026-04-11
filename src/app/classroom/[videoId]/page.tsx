import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventNav } from '@/components/classroom/EventNav';
import { VideoContent } from '@/components/classroom/VideoContent';
import { VideoObjectJsonLd } from '@/components/classroom/VideoObjectJsonLd';
import { getVideoById, getAllCourses, getVideoIds, getFirstVideo } from '@/lib/course';

interface ClassroomPageProps {
  params: Promise<{
    videoId: string;
  }>;
}

export async function generateStaticParams() {
  const videoIds = getVideoIds();
  return videoIds.map((videoId) => ({
    videoId,
  }));
}

export async function generateMetadata({ params }: ClassroomPageProps): Promise<Metadata> {
  const { videoId } = await params;
  const videoData = getVideoById(videoId);

  if (!videoData) {
    return {
      title: '视频未找到 | 宗师课堂',
    };
  }

  const title = `${videoData.title} | ${videoData.course.shortTitle} - 宗师课堂`;
  const description = videoData.summary || videoData.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'video.other',
      images: [
        {
          url: videoData.coverImage,
          width: 1200,
          height: 630,
          alt: videoData.title,
        },
      ],
      videos: [
        {
          url: videoData.videoUrl,
          type: 'application/x-mpegURL',
        },
      ],
    },
    twitter: {
      card: 'player',
      title,
      description,
      images: [videoData.coverImage],
      players: {
        playerUrl: videoData.videoUrl,
        streamUrl: videoData.videoUrl,
        width: 1200,
        height: 675,
      },
    },
    alternates: {
      canonical: `https://www.zhangyifan.agency/classroom/${videoId}`,
    },
  };
}

export default async function ClassroomPage({ params }: ClassroomPageProps) {
  const { videoId } = await params;
  let videoData = getVideoById(videoId);

  if (!videoData) {
    const firstVideo = getFirstVideo();
    if (firstVideo) {
      videoData = firstVideo;
    } else {
      notFound();
    }
  }

  const courses = getAllCourses();

  return (
    <>
      <VideoObjectJsonLd video={videoData} />

      <div className="bg-[#0a0a0a] text-white min-h-screen flex">
        <EventNav courses={courses} currentVideoId={videoData.id} />

        <main className="flex-1 lg:ml-0 overflow-x-hidden">
          <VideoContent video={videoData} />
        </main>
      </div>
    </>
  );
}
