import { Suspense } from 'react';
import { modules } from '@/lib/courses/data';
import { ModuleContent } from '@/components/courses/module-content';
import { Card } from '@/components/ui/card';

// Static params for all modules
export const dynamicParams = false;

export async function generateStaticParams() {
  return modules.map((module) => ({
    moduleId: module.id,
  }));
}

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8">
          <div className="h-8 bg-muted animate-pulse rounded mb-4" />
          <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
        </Card>
      </div>
    }>
      <ModuleContent moduleId={params.moduleId} />
    </Suspense>
  );
}