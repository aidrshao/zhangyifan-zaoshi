'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  videoUrl: string;
  coverImage: string;
  videoId: string;
}

export function VideoPlayer({ videoUrl, coverImage, videoId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    setIsLoading(true);
    setError(null);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hlsRef.current = hls;

      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        console.log('HLS manifest parsed, video ready');
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Network error:', data);
              setError('网络错误，请检查网络连接后重试');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Media error:', data);
              setError('媒体加载错误，正在尝试恢复...');
              hls.recoverMediaError();
              break;
            default:
              console.error('Fatal error:', data);
              setError('播放失败，请刷新页面重试');
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl;
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
      });
      video.addEventListener('error', () => {
        setError('视频加载失败');
      });
    } else {
      setError('您的浏览器不支持 HLS 视频播放');
      setIsLoading(false);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoUrl]);

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/5 relative">
      <video
        ref={videoRef}
        id={`player-${videoId}`}
        className="w-full h-full"
        poster={coverImage}
        controls
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        preload="auto"
      >
        您的浏览器不支持视频播放
      </video>

      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">视频加载中...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/90">
          <div className="text-center p-8">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-gold text-black rounded-sm font-bold hover:bg-gold/90 transition-colors"
            >
              重试
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
