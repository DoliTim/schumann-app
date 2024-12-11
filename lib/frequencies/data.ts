import { schumannFrequencies } from './categories/schumann';
import { solfeggioFrequencies } from './categories/solfeggio';
import { planetaryFrequencies } from './categories/planetary';
import { brainwaveFrequencies } from './categories/brainwave';
import { angelicFrequencies } from './categories/angelic';
import { teslaFrequencies } from './categories/tesla';

export interface Frequency {
  id: string;
  hz: number;
  name: string;
  description: string;
  category: 'schumann' | 'solfeggio' | 'angelic' | 'planetary' | 'tesla' | 'brainwave';
  benefits: string[];
  requiresV2?: boolean;
  chakra?: string;
  color?: string;
}

export {
  schumannFrequencies,
  solfeggioFrequencies,
  planetaryFrequencies,
  brainwaveFrequencies,
  angelicFrequencies,
  teslaFrequencies
};

export const allFrequencies = [
  ...schumannFrequencies,
  ...solfeggioFrequencies,
  ...planetaryFrequencies,
  ...brainwaveFrequencies,
  ...angelicFrequencies,
  ...teslaFrequencies
];

export function getFrequencyByCategory(category: Frequency['category']) {
  return allFrequencies.filter(freq => freq.category === category);
}

export function getFrequencyById(id: string) {
  return allFrequencies.find(freq => freq.id === id);
}

export function getAvailableFrequencies(hasV2: boolean) {
  return allFrequencies.filter(freq => !freq.requiresV2 || hasV2);
}