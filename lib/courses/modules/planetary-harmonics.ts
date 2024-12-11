import { Module } from '../types';

export const planetaryModule: Module = {
  id: 'planetary-harmonics',
  title: "Planetary Frequencies",
  description: "Discover the harmonic frequencies of celestial bodies and their influence on wellbeing",
  duration: '35 minutes',
  level: 'intermediate',
  chapters: [
    {
      id: 'planetary-basics',
      title: 'Understanding Planetary Frequencies',
      type: 'text',
      content: `
# Planetary Frequency Harmonics

Each planet in our solar system generates unique frequency signatures that influence life on Earth.

## Planetary Frequencies

### Core Frequencies
- Earth: 7.83 Hz & 126.22 Hz
- Venus: 221.23 Hz
- Mars: 144.72 Hz
- Jupiter: 183.58 Hz
- Saturn: 147.85 Hz

### Scientific Basis
- Orbital resonance
- Electromagnetic fields
- Gravitational waves
- Harmonic patterns

> "Access these frequencies with the Schumann V2 Pro's full-spectrum capabilities."

## Historical Understanding

### Ancient Knowledge
- Babylonian astronomy
- Greek harmonic theory
- Vedic calculations
- Chinese cosmology

### Modern Validation
- NASA measurements
- Space research
- Electromagnetic studies
- Quantum physics
`,
      resources: [
        {
          title: 'Planetary Frequency Charts',
          type: 'pdf',
          url: '/resources/planetary-frequencies.pdf'
        }
      ]
    },
    {
      id: 'planetary-applications',
      title: 'Practical Applications',
      type: 'text',
      content: `
# Applying Planetary Frequencies

Understanding how to use planetary frequencies for enhanced wellbeing and spiritual connection.

## Frequency Benefits

### Earth (7.83 Hz & 126.22 Hz)
- Grounding
- Stability
- Natural rhythm
- Physical healing

### Venus (221.23 Hz)
- Love
- Harmony
- Beauty
- Relationships

### Mars (144.72 Hz)
- Energy
- Motivation
- Action
- Courage

### Jupiter (183.58 Hz)
- Expansion
- Wisdom
- Growth
- Abundance

### Saturn (147.85 Hz)
- Structure
- Discipline
- Responsibility
- Mastery

> "Experience these celestial frequencies with the Schumann V2 Pro."

## Integration Methods

### Daily Practice
1. Morning Alignment
   - Earth frequency grounding
   - Mars energy activation
   - Jupiter expansion

2. Evening Practice
   - Venus harmony
   - Saturn reflection
   - Earth restoration

### Advanced Applications
1. Specific Goals
   - Career advancement
   - Relationship healing
   - Personal growth
   - Spiritual development

2. Timing Optimization
   - Planetary hours
   - Celestial alignments
   - Energy peaks
   - Optimal windows
`,
      resources: [
        {
          title: 'Planetary Applications Guide',
          type: 'pdf',
          url: '/resources/planetary-applications.pdf'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q1',
            question: 'What is Earth\'s primary harmonic frequency?',
            options: ['7.83 Hz', '126.22 Hz', '144.72 Hz', '183.58 Hz'],
            correctAnswer: 1,
            explanation: 'While 7.83 Hz is Earth\'s fundamental frequency, 126.22 Hz is its primary harmonic frequency.'
          }
        ]
      }
    }
  ]
};