import { Frequency } from '../data';

export const teslaFrequencies: Frequency[] = [
  {
    id: 'tesla-333',
    hz: 333,
    name: 'Tesla 3',
    category: 'tesla',
    description: 'First frequency in Tesla\'s 3-6-9 sequence',
    benefits: ['Balance', 'Harmony', 'Completion'],
    requiresV2: true,
    color: '#FFD54F'
  },
  {
    id: 'tesla-639',
    hz: 639,
    name: 'Tesla 6',
    category: 'tesla',
    description: 'Second frequency in Tesla\'s 3-6-9 sequence',
    benefits: ['Relationships', 'Communication', 'Social harmony'],
    requiresV2: true,
    color: '#81C784'
  },
  {
    id: 'tesla-999',
    hz: 999,
    name: 'Tesla 9',
    category: 'tesla',
    description: 'Third frequency in Tesla\'s 3-6-9 sequence',
    benefits: ['Completion', 'Transformation', 'Universal connection'],
    requiresV2: true,
    color: '#64B5F6'
  }
];