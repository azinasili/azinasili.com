import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../client';
import { Projects } from '../../types/project';

const projectsQuery = `*[_type == "project"] {
  _id,
  name,
  url,
  description,
  highlights,
}
`;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<Projects | void> => {
  const projects = await client.fetch(projectsQuery);
  return res.status(200).json(projects);
};
