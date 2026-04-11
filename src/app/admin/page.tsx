'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Course, Video } from '@/types/course';

export default function AdminPage() {
  console.log('AdminPage 正在加载...');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchCourses();
  }, []);

  const checkAuth = async () => {
    const res = await fetch('/api/admin/auth');
    const data = await res.json();
    if (!data.authenticated) {
      router.push('/admin/login');
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/admin/courses');
      const data = await res.json();
      setCourses(data.courses || []);
    } catch (error) {
      console.error('获取课程失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const handleSaveVideo = async (video: Video, courseId: string) => {
    console.log('准备保存视频:', { video, courseId });
    try {
      if (!courseId) {
        alert('错误：课程 ID 缺失');
        return;
      }

      const url = isAddingVideo 
        ? `/api/admin/courses/${courseId}/videos`
        : `/api/admin/courses/${courseId}/videos/${video.id}`;
      
      const res = await fetch(url, {
        method: isAddingVideo ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video)
      });

      if (res.ok) {
        alert('保存成功');
        fetchCourses();
        setEditingVideo(null);
        setIsAddingVideo(false);
      } else {
        const errorData = await res.json();
        alert(`保存失败: ${errorData.error || res.statusText}`);
      }
    } catch (error) {
      console.error('保存视频失败:', error);
      alert('保存视频时发生系统错误，请检查控制台');
    }
  };

  const handleDeleteVideo = async (courseId: string, videoId: string) => {
    if (!confirm('确定要删除这个视频吗？')) return;

    try {
      const res = await fetch(`/api/admin/courses/${courseId}/videos/${videoId}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        fetchCourses();
      }
    } catch (error) {
      console.error('删除视频失败:', error);
    }
  };

  const handleSaveCourse = async (course: Partial<Course>) => {
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course)
      });

      if (res.ok) {
        fetchCourses();
        setIsAddingCourse(false);
      }
    } catch (error) {
      console.error('创建课程失败:', error);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm('确定要删除这个课程吗？所有视频也将被删除。')) return;

    try {
      const res = await fetch(`/api/admin/courses/${courseId}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        fetchCourses();
        setSelectedCourse(null);
      }
    } catch (error) {
      console.error('删除课程失败:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-white">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="bg-neutral-900 border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">宗师课堂 · 后台管理</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            退出登录
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-neutral-900 rounded-xl border border-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-bold text-white">课程列表</h2>
                <button
                  onClick={() => setIsAddingCourse(true)}
                  className="px-3 py-1.5 text-sm bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors"
                >
                  + 新增课程
                </button>
              </div>
              <div className="divide-y divide-white/5">
                {courses.map(course => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedCourse?.id === course.id 
                        ? 'bg-gold/10 border-l-2 border-gold' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <h3 className="font-medium text-white mb-1">{course.eventName}</h3>
                    <p className="text-sm text-gray-500">
                      {course.videos?.length || 0} 个视频
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedCourse ? (
              <div className="bg-neutral-900 rounded-xl border border-white/5 overflow-hidden">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <h2 className="font-bold text-white">{selectedCourse.eventName}</h2>
                    <p className="text-sm text-gray-500 mt-1">{selectedCourse.eventDescription}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setIsAddingVideo(true);
                        setEditingVideo({
                          id: '',
                          title: '',
                          description: '',
                          videoUrl: '',
                          coverImage: '',
                          duration: '00:00',
                          summary: '',
                          transcript: '',
                          tags: [],
                          publishDate: new Date().toISOString().split('T')[0]
                        });
                      }}
                      className="px-3 py-1.5 text-sm bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors"
                    >
                      + 新增视频
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(selectedCourse.id)}
                      className="px-3 py-1.5 text-sm bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      删除课程
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-white/5">
                  {selectedCourse.videos?.map(video => (
                    <div key={video.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-1">{video.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2">{video.description}</p>
                          <div className="flex gap-2 mt-2">
                            {video.tags?.map(tag => (
                              <span key={tag} className="px-2 py-0.5 text-xs bg-neutral-800 text-gray-400 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => {
                              setIsAddingVideo(false);
                              setEditingVideo(video);
                            }}
                            className="px-3 py-1 text-sm text-gold hover:text-gold/80 transition-colors"
                          >
                            编辑
                          </button>
                          <button
                            onClick={() => handleDeleteVideo(selectedCourse.id, video.id)}
                            className="px-3 py-1 text-sm text-red-400 hover:text-red-300 transition-colors"
                          >
                            删除
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-neutral-900 rounded-xl border border-white/5 p-12 text-center">
                <p className="text-gray-500">请选择一个课程查看视频</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {editingVideo && (
        <VideoEditModal
          video={editingVideo}
          courseId={selectedCourse?.id || ''}
          isNew={isAddingVideo}
          onSave={handleSaveVideo}
          onClose={() => {
            setEditingVideo(null);
            setIsAddingVideo(false);
          }}
        />
      )}

      {isAddingCourse && (
        <CourseAddModal
          onSave={handleSaveCourse}
          onClose={() => setIsAddingCourse(false)}
        />
      )}
    </div>
  );
}

function VideoEditModal({ 
  video, 
  courseId, 
  isNew,
  onSave, 
  onClose 
}: { 
  video: Video; 
  courseId: string;
  isNew: boolean;
  onSave: (video: Video, courseId: string) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState(video);

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    console.log('handleSubmit 被触发了');
    window.alert('触发了保存逻辑');
    onSave(form, courseId);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 rounded-xl border border-white/5 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-white/5 flex items-center justify-between sticky top-0 bg-neutral-900">
          <h3 className="font-bold text-white">{isNew ? '新增视频' : '编辑视频'}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">视频标题</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">短标题</label>
            <input
              type="text"
              value={form.shortTitle || ''}
              onChange={(e) => setForm({ ...form, shortTitle: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">视频简介</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white h-20"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">视频URL (m3u8)</label>
            <input
              type="text"
              value={form.videoUrl}
              onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
              placeholder="https://..."
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">封面图片URL</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
              placeholder="https://..."
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">时长 (如 16:23)</label>
            <input
              type="text"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">核心干货摘要</label>
            <textarea
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white h-24"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">完整转录稿</label>
            <textarea
              value={form.transcript}
              onChange={(e) => setForm({ ...form, transcript: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white h-32"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">标签 (逗号分隔)</label>
            <input
              type="text"
              value={form.tags?.join(', ') || ''}
              onChange={(e) => setForm({ ...form, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">发布日期</label>
            <input
              type="date"
              value={form.publishDate}
              onChange={(e) => setForm({ ...form, publishDate: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 py-2 bg-gold text-black font-bold rounded-lg hover:bg-gold/90 transition-colors"
            >
              保存
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CourseAddModal({ 
  onSave, 
  onClose 
}: { 
  onSave: (course: Partial<Course>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    eventName: '',
    shortTitle: '',
    eventDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...form,
      id: `course-${Date.now()}`,
      videos: []
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 rounded-xl border border-white/5 w-full max-w-lg">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-bold text-white">新增课程</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">事件名称</label>
            <input
              type="text"
              value={form.eventName}
              onChange={(e) => setForm({ ...form, eventName: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">短标题</label>
            <input
              type="text"
              value={form.shortTitle}
              onChange={(e) => setForm({ ...form, shortTitle: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">事件描述</label>
            <textarea
              value={form.eventDescription}
              onChange={(e) => setForm({ ...form, eventDescription: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-800 border border-white/10 rounded-lg text-white h-20"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 bg-gold text-black font-bold rounded-lg hover:bg-gold/90 transition-colors"
            >
              创建
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
