import { NextApiRequest, NextApiResponse } from 'next';

const links = [
  {
    title: 'Github',
    name: 'github',
    url: 'https://github.com/azinasili',
    icon: 'icon_github.svg',
    id: 1,
  },
  {
    title: 'Codepen',
    name: 'codepen',
    url: 'https://codepen.io/azinasili/',
    icon: 'icon_codepen.svg',
    id: 2,
  },
  {
    title: 'Medium',
    name: 'medium',
    url: 'https://medium.com/@azinasili',
    icon: 'icon_medium.svg',
    id: 3,
  },
  {
    title: 'Twitter',
    name: 'twitter',
    url: 'https://twitter.com/azinasili',
    icon: 'icon_twitter.svg',
    id: 4,
  },
  {
    title: 'hello@azinasili.com',
    name: 'gmail',
    url: 'mailto:hello@azinasili.com',
    icon: 'icon_email.svg',
    id: 5,
  },
];

export default async function handleProfile(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(links);
}
