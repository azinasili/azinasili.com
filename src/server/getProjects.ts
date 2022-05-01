import type { Project } from 'types/Project';

export default async function getProjects(): Promise<Project[]> {
  return [
    {
      name: 'Cool Project Title',
      description: 'This was a super cool project',
      url: '/one',
      highlights: ['thing01', 'thing02', 'thing03'],
      id: 1,
    },
    {
      name: 'This is another neat one',
      description: 'Amazingly cool stuff',
      url: '/two',
      highlights: ['thing01', 'thing02', 'thing03', 'thing04'],
      id: 2,
    },
    {
      name: 'Very cool of me!',
      description: 'I know right',
      url: '/three',
      highlights: ['thing01', 'thing02'],
      id: 3,
    },
  ];
}
