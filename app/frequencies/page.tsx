'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FrequencyWheel } from '@/components/frequencies/frequency-wheel';
import { FrequencyList } from '@/components/frequencies/frequency-list';
import { 
  schumannFrequencies, 
  solfeggioFrequencies, 
  planetaryFrequencies,
  brainwaveFrequencies,
  angelicFrequencies,
  teslaFrequencies
} from '@/lib/frequencies/data';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';

export default function FrequenciesPage() {
  const [hasV2, setHasV2] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Sacred Frequencies</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore healing frequencies across traditions
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle>Earth's Frequency</CardTitle>
              <CardDescription>Experience 7.83 Hz Schumann Resonance</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <FrequencyWheel hasV2={hasV2} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Frequency Library</CardTitle>
                  <CardDescription>Explore healing frequencies</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
                  V2 Pro
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <Tabs defaultValue="brainwave" className="space-y-4">
                <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                  <TabsTrigger value="brainwave">Brain</TabsTrigger>
                  <TabsTrigger value="solfeggio">Sacred</TabsTrigger>
                  <TabsTrigger value="planetary">Planet</TabsTrigger>
                  <TabsTrigger value="angelic">Angel</TabsTrigger>
                  <TabsTrigger value="tesla">Tesla</TabsTrigger>
                  <TabsTrigger value="schumann">Earth</TabsTrigger>
                </TabsList>

                <TabsContent value="brainwave">
                  <FrequencyList frequencies={brainwaveFrequencies} />
                </TabsContent>
                <TabsContent value="solfeggio">
                  <FrequencyList frequencies={solfeggioFrequencies} />
                </TabsContent>
                <TabsContent value="planetary">
                  <FrequencyList frequencies={planetaryFrequencies} />
                </TabsContent>
                <TabsContent value="angelic">
                  <FrequencyList frequencies={angelicFrequencies} />
                </TabsContent>
                <TabsContent value="tesla">
                  <FrequencyList frequencies={teslaFrequencies} />
                </TabsContent>
                <TabsContent value="schumann">
                  <FrequencyList frequencies={schumannFrequencies.slice(1)} />
                </TabsContent>
              </Tabs>

              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 text-sm">
                    <p className="text-purple-200">
                      V2 Pro unlocks the full spectrum (0.1-999.99 Hz)
                    </p>
                    <p className="text-gray-400">
                      V1 provides 7.83 Hz Earth frequency
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}