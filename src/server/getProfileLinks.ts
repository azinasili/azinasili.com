import type { ProfileLink } from '~/types/Profile';

export async function getProfileLinks(): Promise<ProfileLink[]> {
  return [
    {
      title: 'Github',
      name: 'github',
      url: 'https://github.com/azinasili',
      id: 1,
    },
    {
      title: 'Codepen',
      name: 'codepen',
      url: 'https://codepen.io/azinasili/',
      id: 2,
    },
    {
      title: 'Medium',
      name: 'codepen',
      url: 'https://medium.com/@azinasili',
      id: 3,
    },
    {
      title: 'Contact',
      name: 'gmail',
      url: 'mailto:hello@azinasili.com',
      id: 5,
    },
  ];
}
