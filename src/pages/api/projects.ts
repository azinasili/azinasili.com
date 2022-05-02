import type { NextApiRequest, NextApiResponse } from 'next';
import getProjects from 'server/getProjects';

export default async function handleProjects(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(getProjects());
}
