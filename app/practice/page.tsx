'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PracticeCalendar } from '@/components/practice/practice-calendar';
import { OptimizationPrograms } from '@/components/practice/optimization-programs';
import { FrequencySession } from '@/components/practice/frequency-session';
import { DeviceCheck } from '@/components/practice/device-check';

export default function ReoptimizePage() {
  const [hasDevice, setHasDevice] = useState(false);
  const [deviceType, setDeviceType] = useState<'v1' | 'v2' | null>(null);

  if (!hasDevice) {
    return <DeviceCheck onDeviceSelect={(type) => {
      setHasDevice(true);
      setDeviceType(type);
    }} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequency Optimization</h1>
          <p className="text-lg text-muted-foreground">
            Structured programs to optimize your wellbeing through targeted frequency exposure
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <PracticeCalendar />

          <Tabs defaultValue="programs" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="session">Current Session</TabsTrigger>
            </TabsList>

            <TabsContent value="programs">
              <Card>
                <CardHeader>
                  <CardTitle>Optimization Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <OptimizationPrograms deviceType={deviceType} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="session">
              <Card>
                <CardHeader>
                  <CardTitle>Active Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <FrequencySession deviceType={deviceType} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}