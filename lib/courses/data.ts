import { Module } from './types';
import { earthResonanceModule } from './modules/earth-resonance';
import { brainwaveModule } from './modules/brainwave-frequencies';
import { solfeggioModule } from './modules/solfeggio-frequencies';
import { planetaryModule } from './modules/planetary-harmonics';
import { teslaModule } from './modules/tesla-frequencies';
import { angelicModule } from './modules/angelic-frequencies';
import { modernChallengesModule } from './modules/modern-challenges';
import { clinicalResearchModule } from './modules/clinical-research';
import { frequencyTechnologyModule } from './modules/frequency-technology';
import { practicalApplicationsModule } from './modules/practical-applications';
import { protectionStrategiesModule } from './modules/protection-strategies';

export const modules: Module[] = [
  earthResonanceModule,
  brainwaveModule,
  solfeggioModule,
  planetaryModule,
  teslaModule,
  angelicModule,
  modernChallengesModule,
  clinicalResearchModule,
  frequencyTechnologyModule,
  practicalApplicationsModule,
  protectionStrategiesModule
];

export function getModuleById(id: string) {
  return modules.find(module => module.id === id);
}

export function getChapterById(moduleId: string, chapterId: string) {
  const module = getModuleById(moduleId);
  return module?.chapters.find(chapter => chapter.id === chapterId);
}