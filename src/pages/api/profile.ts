import type { NextApiRequest, NextApiResponse } from 'next';
import getProfileLinks from 'server/getProfileLinks';

export default async function handleProfile(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(getProfileLinks());
}
