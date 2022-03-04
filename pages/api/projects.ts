import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
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

export default async function handleProfile(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(projects);
}
