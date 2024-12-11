'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getProgress } from '@/lib/courses/progress';
import Link from 'next/link';
import { Brain, Heart, Music, Waves, Sparkles, Globe } from 'lucide-react';

export default function LearnPage() {
  const modules = [
    {
      id: 'earth-resonance',
      title: "Earth's Natural Frequency",
      description: "Discover the fundamental 7.83 Hz Schumann Resonance",
      icon: Globe,
      color: "from-green-500 to-emerald-700",
      progress: 33
    },
    {
      id: 'brainwave-frequencies',
      title: "Brainwave States",
      description: "Explore different brainwave frequencies",
      icon: Brain,
      color: "from-purple-500 to-indigo-700",
      progress: 0
    },
    {
      id: 'solfeggio-frequencies',
      title: "Sacred Solfeggio",
      description: "Learn about ancient healing frequencies",
      icon: Music,
      color: "from-amber-500 to-orange-700",
      progress: 0
    },
    {
      id: 'planetary-harmonics',
      title: "Planetary Frequencies",
      description: "Understand celestial harmonics",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-700",
      progress: 0
    },
    {
      id: 'tesla-frequencies',
      title: "Tesla's 3-6-9",
      description: "Explore Tesla's frequency discoveries",
      icon: Waves,
      color: "from-rose-500 to-pink-700",
      progress: 0
    },
    {
      id: 'angelic-frequencies',
      title: "Angelic Frequencies",
      description: "Discover spiritual frequency patterns",
      icon: Heart,
      color: "from-violet-500 to-purple-700",
      progress: 0
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Frequency Learning</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore healing frequencies and their applications
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/learn/${module.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${module.color} group-hover:scale-110 transition-transform duration-300`}>
                        <module.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl mb-1">{module.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base">{module.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="space-y-2">
                      <Progress value={module.progress} />
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Progress: {module.progress}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-purple-500">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Pro V2 Features</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Access advanced frequencies with our Pro V2 device
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}