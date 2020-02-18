import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../client';
import { SocialLinks } from '../../types/socialLink';

const socialLinkQuery = `*[_type == "socialLink"] {
  _id,
  title,
  url,
  icon,
}
`;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<SocialLinks | void> => {
  const links = await client.fetch(socialLinkQuery);
  return res.status(200).json(links);
};
