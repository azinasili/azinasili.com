import type { FC } from 'react';
import { memo } from 'react';
import type { Project } from 'types/Project';
import ProjectItem from './ProjectListItem';
import { PointerList } from 'components/PointerList';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return <PointerList>{projects.map(project => <ProjectItem {...project} key={project.id} />)}</PointerList>
};

export default memo(ProjectList);
