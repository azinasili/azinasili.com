import type { FC } from 'react';
import { memo } from 'react';
import type { Project } from 'types/Project';
import { PointerList } from 'components/PointerList';
import ProjectItem from './ProjectListItem';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return <PointerList>{projects.map(project => <ProjectItem {...project} key={project.id} />)}</PointerList>
};

export default memo(ProjectList);
