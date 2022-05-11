import type { ProfileLink } from 'types/Profile';

export async function getProfileLinks(): Promise<ProfileLink[]> {
  return [
    {
      title: 'Github',
      name: 'github',
      url: 'https://github.com/azinasili',
      iconPath: 'icon_github.svg',
      id: 1,
    },
    {
      title: 'Codepen',
      name: 'codepen',
      url: 'https://codepen.io/azinasili/',
      iconPath: 'icon_codepen.svg',
      id: 2,
    },
    {
      title: 'Medium',
      name: 'medium',
      url: 'https://medium.com/@azinasili',
      iconPath: 'icon_medium.svg',
      id: 3,
    },
    {
      title: 'Twitter',
      name: 'twitter',
      url: 'https://twitter.com/azinasili',
      iconPath: 'icon_twitter.svg',
      id: 4,
    },
    {
      title: 'Contact',
      name: 'gmail',
      url: 'mailto:hello@azinasili.com',
      iconPath: 'icon_email.svg',
      id: 5,
    },
  ];
}
