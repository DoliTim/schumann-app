import { ReactNode } from 'react';

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  chapters: Chapter[];
  prerequisites?: string[];
  certification?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'interactive' | 'quiz';
  resources?: Resource[];
  quiz?: Quiz;
  progress?: Progress;
  interactive?: Interactive;
}

export interface Resource {
  title: string;
  type: 'pdf' | 'video' | 'link';
  url: string;
}

export interface Quiz {
  questions: Question[];
  passingScore?: number;
  attempts?: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Progress {
  required: boolean;
  timeRequired?: number; // minimum time in seconds
  checkpoints?: Checkpoint[];
}

export interface Checkpoint {
  id: string;
  title: string;
  content: ReactNode;
  completed: boolean;
}

export interface Interactive {
  type: 'frequency-demo' | 'visualization' | 'practice';
  content: any;
}

export interface UserProgress {
  moduleId: string;
  completed: boolean;
  chaptersProgress: {
    [chapterId: string]: {
      completed: boolean;
      timeSpent: number;
      quizScore?: number;
      checkpoints: string[];
      lastAccessed: string;
    }
  };
}