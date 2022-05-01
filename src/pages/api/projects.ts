import type { NextApiRequest, NextApiResponse } from 'next';
import getProjects from 'server/service/projects/get';

export default async function handleProjects(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(getProjects());
}
