import { Frequency } from '../data';

export const brainwaveFrequencies: Frequency[] = [
  {
    id: 'brainwave-delta',
    hz: 0.5,
    name: 'Delta Waves',
    category: 'brainwave',
    description: 'Deep sleep and healing frequency range (0.5-4 Hz)',
    benefits: [
      'Deep sleep',
      'Physical healing',
      'Regeneration',
      'Unconscious mind access'
    ],
    requiresV2: true,
    color: '#1A237E'
  },
  {
    id: 'brainwave-theta',
    hz: 6.0,
    name: 'Theta Waves',
    category: 'brainwave',
    description: 'Meditation and creativity frequency range (4-8 Hz)',
    benefits: [
      'Deep meditation',
      'Enhanced creativity',
      'Spiritual connection',
      'Subconscious access'
    ],
    requiresV2: true,
    color: '#311B92'
  },
  {
    id: 'brainwave-alpha',
    hz: 10.0,
    name: 'Alpha Waves',
    category: 'brainwave',
    description: 'Relaxation and focus frequency range (8-13 Hz)',
    benefits: [
      'Relaxed alertness',
      'Stress reduction',
      'Enhanced learning',
      'Mental clarity'
    ],
    requiresV2: true,
    color: '#4A148C'
  },
  {
    id: 'brainwave-beta',
    hz: 20.0,
    name: 'Beta Waves',
    category: 'brainwave',
    description: 'Active thinking and focus frequency range (13-30 Hz)',
    benefits: [
      'Mental activity',
      'Focus and concentration',
      'Problem solving',
      'Cognitive performance'
    ],
    requiresV2: true,
    color: '#6A1B9A'
  },
  {
    id: 'brainwave-gamma',
    hz: 40.0,
    name: 'Gamma Waves',
    category: 'brainwave',
    description: 'Peak mental activity frequency range (30-100 Hz)',
    benefits: [
      'Peak performance',
      'Higher consciousness',
      'Insight and intuition',
      'Information processing'
    ],
    requiresV2: true,
    color: '#8E24AA'
  }
];