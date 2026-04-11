import { redirect } from 'next/navigation';
import { getFirstVideo } from '@/lib/course';

export default function ClassroomPage() {
  const firstVideo = getFirstVideo();
  
  if (firstVideo) {
    redirect(`/classroom/${firstVideo.id}`);
  }
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">暂无课程内容</h1>
        <p className="text-gray-400">课程内容正在准备中，敬请期待...</p>
      </div>
    </div>
  );
}
