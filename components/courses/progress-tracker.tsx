'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { getModuleProgress, updateChapterProgress } from '@/lib/courses/progress';
import { Module } from '@/lib/courses/types';

interface ProgressTrackerProps {
  module: Module;
  chapterId: string;
}

export function ProgressTracker({ module, chapterId }: ProgressTrackerProps) {
  const [timeSpent, setTimeSpent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const moduleProgress = getModuleProgress(module.id);
    if (moduleProgress?.chaptersProgress[chapterId]) {
      setTimeSpent(moduleProgress.chaptersProgress[chapterId].timeSpent);
    }

    const timer = setInterval(() => {
      setTimeSpent(prev => {
        const newTime = prev + 1;
        updateChapterProgress(module.id, chapterId, { timeSpent: newTime });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [module.id, chapterId]);

  useEffect(() => {
    const chapter = module.chapters.find(c => c.id === chapterId);
    if (chapter?.progress?.timeRequired) {
      const newProgress = Math.min((timeSpent / chapter.progress.timeRequired) * 100, 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        updateChapterProgress(module.id, chapterId, { completed: true });
      }
    }
  }, [timeSpent, module, chapterId]);

  return (
    <div className="space-y-2">
      <Progress value={progress} className="w-full" />
      <div className="text-sm text-muted-foreground">
        {progress === 100 ? (
          <span className="text-green-500">✓ Chapter Complete</span>
        ) : (
          `Progress: ${Math.round(progress)}%`
        )}
      </div>
    </div>
  );
}