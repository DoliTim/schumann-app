import { Module } from '../types';

export const healingFrequenciesModule: Module = {
  id: 'healing-frequencies',
  title: 'Healing Frequencies',
  description: 'Master the Solfeggio frequencies and their therapeutic applications',
  duration: '5 hours',
  level: 'intermediate',
  chapters: [
    {
      id: 'solfeggio-system',
      title: 'The Solfeggio Frequency System',
      type: 'text',
      content: `
# Understanding Solfeggio Frequencies

The ancient Solfeggio frequencies represent a set of sacred tones used in spiritual music and healing.

## Core Frequencies

- 396 Hz: Liberation from fear and guilt
- 417 Hz: Facilitation of change
- 528 Hz: Transformation and miracles
- 639 Hz: Connecting relationships
- 741 Hz: Expression and solutions
- 852 Hz: Spiritual order
- 963 Hz: Divine consciousness

## Scientific Research

Modern studies have shown these frequencies affect:
- Brain wave patterns
- Cellular vibration
- DNA repair
- Stress reduction
`,
      resources: [
        {
          title: 'Solfeggio Research Database',
          type: 'pdf',
          url: '/resources/solfeggio-research.pdf'
        }
      ]
    }
  ]
};