'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, StopCircle } from 'lucide-react';
import type { Frequency } from '@/lib/frequencies/data';
import { frequencyPlayer } from '@/lib/frequencies/audio';
import { useState } from 'react';

interface FrequencyListProps {
  frequencies: Frequency[];
}

export function FrequencyList({ frequencies }: FrequencyListProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (frequency: Frequency) => {
    if (playingId === frequency.id) {
      frequencyPlayer.stop();
      setPlayingId(null);
    } else {
      frequencyPlayer.stop();
      frequencyPlayer.play(frequency.hz);
      setPlayingId(frequency.id);
    }
  };

  return (
    <div className="grid gap-4">
      {frequencies.map((frequency, index) => (
        <motion.div
          key={frequency.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="group hover:bg-black/40 transition-colors duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <CardTitle>{frequency.name}</CardTitle>
                    {frequency.requiresV2 && (
                      <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
                        V2 Pro
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{frequency.hz} Hz</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handlePlay(frequency)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {playingId === frequency.id ? (
                    <StopCircle className="h-6 w-6" />
                  ) : (
                    <PlayCircle className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{frequency.description}</p>
              <div className="flex flex-wrap gap-2">
                {frequency.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              {frequency.requiresV2 && (
                <div className="mt-4 text-xs text-purple-400">
                  Available with V2 Pro's full-spectrum frequency generation
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}