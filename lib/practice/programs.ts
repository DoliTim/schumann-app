import { FrequencyType } from '@/lib/frequencies/data';

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  frequency: number;
  type: FrequencyType;
  schedule: 'daily' | 'weekly' | 'monthly';
  sessions: Session[];
  benefits: string[];
  requiresV2: boolean;
}

export interface Session {
  id: string;
  title: string;
  duration: number; // in minutes
  description: string;
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'night';
  instructions: string[];
  goals: string[];
}

export const optimizationPrograms: Program[] = [
  // Earth Frequency Programs (7.83 Hz)
  {
    id: 'earth-daily',
    title: 'Daily Earth Connection',
    description: 'Align with Earth\'s natural rhythm through daily practice',
    duration: '30-day program',
    frequency: 7.83,
    type: 'schumann',
    schedule: 'daily',
    requiresV2: false,
    benefits: [
      'Enhanced sleep quality',
      'Reduced stress',
      'Improved focus',
      'Natural energy'
    ],
    sessions: [
      {
        id: 'morning-alignment',
        title: 'Morning Alignment',
        duration: 20,
        timeOfDay: 'morning',
        description: 'Start your day in harmony with Earth\'s frequency',
        instructions: [
          'Place device within 3 feet of meditation space',
          'Sit comfortably with spine straight',
          'Focus on breath for 5 minutes',
          'Visualize connection to Earth'
        ],
        goals: ['Energetic alignment', 'Mental clarity']
      },
      {
        id: 'evening-restoration',
        title: 'Evening Restoration',
        duration: 30,
        timeOfDay: 'evening',
        description: 'Reset and restore your natural rhythm',
        instructions: [
          'Create quiet space before bed',
          'Place device near bedside',
          'Practice gentle breathing',
          'Allow natural unwinding'
        ],
        goals: ['Deep relaxation', 'Sleep preparation']
      }
    ]
  },
  // Solfeggio Programs (V2 Required)
  {
    id: 'solfeggio-healing',
    title: 'Solfeggio Healing Journey',
    description: 'Progressive healing through sacred frequencies',
    duration: '7-day program',
    frequency: 528,
    type: 'solfeggio',
    schedule: 'daily',
    requiresV2: true,
    benefits: [
      'Deep cellular healing',
      'Emotional balance',
      'Spiritual connection',
      'DNA repair'
    ],
    sessions: [
      {
        id: 'morning-miracle',
        title: '528 Hz Morning Miracle',
        duration: 15,
        timeOfDay: 'morning',
        description: 'Start with the miracle frequency for DNA repair',
        instructions: [
          'Set device to 528 Hz',
          'Create sacred space',
          'Hold healing intention',
          'Practice heart-centered breathing'
        ],
        goals: ['Cellular activation', 'Healing intention']
      },
      {
        id: 'evening-harmony',
        title: '639 Hz Evening Harmony',
        duration: 20,
        timeOfDay: 'evening',
        description: 'Balance relationships and harmony',
        instructions: [
          'Switch to 639 Hz',
          'Reflect on relationships',
          'Send loving intentions',
          'Practice gratitude'
        ],
        goals: ['Relationship healing', 'Heart opening']
      }
    ]
  },
  // Brainwave Programs (V2 Required)
  {
    id: 'brain-optimization',
    title: 'Complete Brain Optimization',
    description: 'Enhance mental performance through targeted frequencies',
    duration: '14-day program',
    frequency: 10,
    type: 'brainwave',
    schedule: 'daily',
    requiresV2: true,
    benefits: [
      'Enhanced focus',
      'Improved memory',
      'Better learning',
      'Mental clarity'
    ],
    sessions: [
      {
        id: 'morning-focus',
        title: 'Alpha Focus Session',
        duration: 25,
        timeOfDay: 'morning',
        description: 'Optimize mental performance with alpha waves',
        instructions: [
          'Set to 10 Hz alpha frequency',
          'Create distraction-free space',
          'Practice focused breathing',
          'Set daily intentions'
        ],
        goals: ['Mental clarity', 'Enhanced focus']
      },
      {
        id: 'evening-theta',
        title: 'Theta Creativity',
        duration: 20,
        timeOfDay: 'evening',
        description: 'Access deep creativity and intuition',
        instructions: [
          'Switch to 6 Hz theta frequency',
          'Dim lights and relax',
          'Allow free-flowing thoughts',
          'Journal insights'
        ],
        goals: ['Creative flow', 'Intuitive insights']
      }
    ]
  }
  // Add more programs for other frequency types...
];

export function getProgramsByType(type: FrequencyType): Program[] {
  return optimizationPrograms.filter(program => program.type === type);
}

export function getProgramById(id: string): Program | undefined {
  return optimizationPrograms.find(program => program.id === id);
}