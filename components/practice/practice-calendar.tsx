'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getLastNDays } from '@/lib/practice/storage';
import { PracticeDay } from '@/lib/practice/types';
import { format } from 'date-fns';

export function PracticeCalendar() {
  const [practiceData, setPracticeData] = useState<PracticeDay[]>([]);

  useEffect(() => {
    setPracticeData(getLastNDays(365));
  }, []);

  const getIntensity = (sessions: PracticeDay['sessions']) => {
    if (sessions.length === 0) return 'bg-secondary';
    if (sessions.length <= 1) return 'bg-emerald-200 dark:bg-emerald-900';
    if (sessions.length <= 2) return 'bg-emerald-300 dark:bg-emerald-800';
    if (sessions.length <= 3) return 'bg-emerald-400 dark:bg-emerald-700';
    return 'bg-emerald-500 dark:bg-emerald-600';
  };

  const weeks = [];
  for (let i = 0; i < practiceData.length; i += 7) {
    weeks.push(practiceData.slice(i, i + 7));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Practice History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day) => (
                <TooltipProvider key={day.date}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className={`w-3 h-3 rounded-sm ${getIntensity(day.sessions)}`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="font-semibold">{format(new Date(day.date), 'MMM d, yyyy')}</p>
                        <p>{day.sessions.length} practice sessions</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}