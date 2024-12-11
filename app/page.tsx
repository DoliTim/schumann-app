import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, BookOpen, Heart, Brain } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">The Schumann Experience</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the healing power of Earth's 7.83 Hz frequency through our revolutionary device and comprehensive learning platform.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <Music className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Frequency Library</CardTitle>
            <CardDescription>Explore the Schumann resonance and related frequencies</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/frequencies">
              <Button className="w-full">Explore Frequencies</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Learn</CardTitle>
            <CardDescription>Interactive modules and research materials</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/learn">
              <Button className="w-full">Start Learning</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Practice</CardTitle>
            <CardDescription>Optimize your device usage and track results</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/practice">
              <Button className="w-full">Begin Practice</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Personal Dashboard</CardTitle>
            <CardDescription>Monitor your frequency healing journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard">
              <Button className="w-full">Open Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}