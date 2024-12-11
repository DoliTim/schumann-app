'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { updateChapterProgress } from '@/lib/courses/progress';
import { Checkpoint } from '@/lib/courses/types';

interface CheckpointProps {
  moduleId: string;
  chapterId: string;
  checkpoint: Checkpoint;
}

export function InteractiveCheckpoint({ moduleId, chapterId, checkpoint }: CheckpointProps) {
  const [completed, setCompleted] = useState(checkpoint.completed);

  const handleComplete = () => {
    setCompleted(true);
    updateChapterProgress(moduleId, chapterId, {
      checkpoints: [checkpoint.id]
    });
  };

  return (
    <div className="my-8 p-6 bg-black/40 rounded-xl border border-purple-500/20">
      <h4 className="text-lg font-semibold mb-4">{checkpoint.title}</h4>
      <div className="mb-4">{checkpoint.content}</div>
      <Button 
        onClick={handleComplete}
        disabled={completed}
        variant={completed ? "secondary" : "default"}
      >
        {completed ? "✓ Completed" : "Mark as Complete"}
      </Button>
    </div>
  );
}