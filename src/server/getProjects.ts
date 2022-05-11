import type { Project } from 'types/Project';

export async function getProjects(): Promise<Project[]> {
  return [
    {
      name: 'a11yoffcanvas',
      description: 'This was a super cool project',
      url: 'https://github.com/azinasili/a11yoffcanvas',
      highlights: ['thing01', 'thing02', 'thing03'],
      id: 1,
    },
    {
      name: 'a11ytab',
      description: 'This was a super cool project',
      url: 'https://github.com/azinasili/a11ytab',
      highlights: ['thing01', 'thing02', 'thing03'],
      id: 2,
    },
    {
      name: 'a11ymodal',
      description: 'This was a super cool project',
      url: 'https://github.com/azinasili/a11ymodal',
      highlights: ['thing01', 'thing02', 'thing03'],
      id: 3,
    },
    {
      name: 'a11ytrap',
      description: 'This was a super cool project',
      url: 'https://github.com/azinasili/a11ytrap',
      highlights: ['thing01', 'thing02', 'thing03'],
      id: 4,
    },
    {
      name: 'Wingman',
      description: 'Amazingly cool stuff',
      url: 'https://github.com/azinasili/wingman',
      highlights: ['thing01', 'thing02', 'thing03', 'thing04'],
      id: 5,
    },
    {
      name: 'Dragit',
      description: 'I know right',
      url: 'https://github.com/azinasili/dragit',
      highlights: ['thing01', 'thing02'],
      id: 6,
    },
  ];
}
