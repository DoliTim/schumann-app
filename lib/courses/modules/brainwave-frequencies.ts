import { Module } from '../types';

export const brainwaveModule: Module = {
  id: 'brainwave-frequencies',
  title: "Understanding Brainwave States",
  description: "Explore the fascinating world of brainwave frequencies and their profound effects on consciousness",
  duration: '45 minutes',
  level: 'intermediate',
  chapters: [
    {
      id: 'brainwave-fundamentals',
      title: 'The Science of Brainwaves',
      type: 'text',
      content: `
# Understanding Your Brain's Frequencies

Every moment, your brain produces electrical patterns that directly influence your state of consciousness, emotions, and capabilities.

## The Brainwave Spectrum

### Delta Waves (0.5-4 Hz)
The deepest state of consciousness, associated with:
- Regenerative deep sleep
- Physical healing and recovery
- Growth hormone release
- Unconscious mind access
- Deepest meditation states

### Theta Waves (4-8 Hz)
The realm of deep meditation and REM sleep:
- Enhanced creativity
- Deep meditation
- Vivid visualization
- Memory formation
- Spiritual connection

### Alpha Waves (8-13 Hz)
The bridge between conscious and subconscious:
- Relaxed alertness
- Stress reduction
- Learning readiness
- Creative flow
- Mental coordination

### Beta Waves (13-30 Hz)
The state of active thinking:
- Focused attention
- Problem-solving
- Analytical thinking
- Active conversation
- Peak performance

### Gamma Waves (30-100 Hz)
The state of peak performance:
- Higher consciousness
- Spiritual insight
- Advanced cognition
- Information processing
- Peak awareness

> "The Schumann V2 Pro allows precise access to all these beneficial states through its advanced frequency generation capabilities."

## Historical Discovery

The journey of brainwave discovery:
1. Hans Berger's first EEG (1924)
2. Early meditation studies
3. NASA research applications
4. Modern neuroscience insights

## Scientific Validation

### Research Findings
- EEG studies worldwide
- Clinical applications
- Performance enhancement
- Therapeutic uses
`,
      resources: [
        {
          title: 'Brainwave Research Overview',
          type: 'pdf',
          url: '/resources/brainwave-research.pdf'
        }
      ]
    },
    {
      id: 'practical-applications',
      title: 'Practical Applications',
      type: 'text',
      content: `
# Applying Brainwave Knowledge

Understanding how to harness different brainwave states for optimal performance and wellbeing.

## State-Specific Benefits

### Deep Sleep Enhancement (Delta)
- Natural sleep improvement
- Physical regeneration
- Immune system boost
- Cellular repair
- Growth hormone optimization

### Meditation & Creativity (Theta)
- Enhanced meditation depth
- Creative problem-solving
- Intuitive insights
- Emotional processing
- Spiritual connection

### Learning & Focus (Alpha)
- Accelerated learning
- Stress reduction
- Mental clarity
- Memory enhancement
- Performance optimization

### Active Performance (Beta)
- Sharp focus
- Quick thinking
- Active problem-solving
- Physical coordination
- Peak mental performance

### Transcendent States (Gamma)
- Advanced meditation
- Spiritual experiences
- Enhanced perception
- Information synthesis
- Peak consciousness

> "Experience these states with precision using the Schumann V2 Pro's multi-frequency capabilities."

## Practical Integration

### Daily Applications
1. Morning Routine
   - Beta waves for alertness
   - Alpha for planning
   - Theta for creativity

2. Work Enhancement
   - Beta for focus
   - Alpha for breaks
   - Gamma for complex tasks

3. Evening Optimization
   - Alpha for relaxation
   - Theta for meditation
   - Delta for sleep

### Advanced Techniques
1. State Stacking
   - Progressive frequency shifts
   - State combinations
   - Enhanced outcomes

2. Targeted Applications
   - Learning optimization
   - Performance enhancement
   - Recovery acceleration
`,
      resources: [
        {
          title: 'Practical Applications Guide',
          type: 'pdf',
          url: '/resources/brainwave-applications.pdf'
        }
      ],
      quiz: {
        questions: [
          {
            id: 'q1',
            question: 'Which brainwave state is associated with deep, regenerative sleep?',
            options: ['Alpha', 'Beta', 'Delta', 'Theta'],
            correctAnswer: 2,
            explanation: 'Delta waves (0.5-4 Hz) are associated with deep, regenerative sleep and physical healing.'
          },
          {
            id: 'q2',
            question: 'What is the optimal brainwave state for active learning and focused attention?',
            options: ['Delta', 'Theta', 'Alpha', 'Beta'],
            correctAnswer: 3,
            explanation: 'Beta waves (13-30 Hz) are optimal for focused attention and active learning.'
          }
        ]
      }
    }
  ]
};