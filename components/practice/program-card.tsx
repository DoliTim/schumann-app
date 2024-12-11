'use client';

import { Program } from '@/lib/practice/programs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ProgramCardProps {
  program: Program;
  hasV2: boolean;
  onStart: (program: Program) => void;
}

export function ProgramCard({ program, hasV2, onStart }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`relative ${program.requiresV2 && !hasV2 ? 'opacity-50' : ''}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{program.title}</span>
          {program.requiresV2 && (
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
              V2 Pro
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">{program.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{program.schedule}</span>
            </div>
          </div>

          {expanded && (
            <div className="space-y-4 mt-4 pt-4 border-t border-gray-800">
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <h4 className="font-semibold">Sessions:</h4>
                {program.sessions.map(session => (
                  <div 
                    key={session.id}
                    className="bg-black/20 p-3 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{session.title}</span>
                      <span className="text-sm text-gray-400">
                        {session.duration} min
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'Learn More'}
            </Button>
            <Button
              onClick={() => onStart(program)}
              disabled={program.requiresV2 && !hasV2}
            >
              Start Program
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}