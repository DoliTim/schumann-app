'use client';

import { UserProgress } from './types';

const STORAGE_KEY = 'course_progress';

export function saveProgress(progress: UserProgress) {
  if (typeof window === 'undefined') return;
  const existing = getProgress();
  const updated = {
    ...existing,
    [progress.moduleId]: progress
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getProgress(): Record<string, UserProgress> {
  if (typeof window === 'undefined') return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export function getModuleProgress(moduleId: string): UserProgress | null {
  const progress = getProgress();
  return progress[moduleId] || null;
}

export function updateChapterProgress(
  moduleId: string, 
  chapterId: string, 
  update: Partial<UserProgress['chaptersProgress'][string]>
) {
  const progress = getModuleProgress(moduleId);
  if (!progress) return;

  const chapterProgress = progress.chaptersProgress[chapterId] || {
    completed: false,
    timeSpent: 0,
    checkpoints: [],
    lastAccessed: new Date().toISOString()
  };

  progress.chaptersProgress[chapterId] = {
    ...chapterProgress,
    ...update,
    lastAccessed: new Date().toISOString()
  };

  // Check if all chapters are completed
  const allCompleted = Object.values(progress.chaptersProgress)
    .every(chapter => chapter.completed);
  
  progress.completed = allCompleted;

  saveProgress(progress);
}

export function initializeModuleProgress(moduleId: string): UserProgress {
  const progress: UserProgress = {
    moduleId,
    completed: false,
    chaptersProgress: {},
    lastAccessed: new Date().toISOString()
  };
  saveProgress(progress);
  return progress;
}