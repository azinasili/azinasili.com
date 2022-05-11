import type { FC } from 'react';
import { memo } from 'react';
import type { Project } from 'types/Project';
import styled from 'styled-components';
import ProjectItem from './ProjectListItem';
import { PointerList } from 'components/PointerList';

interface ProjectListProps {
  projects: Project[];
}

const Items = styled(PointerList)`
  list-style: none;
  padding-left: 0;
`;

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return <Items>{projects.map(project => <ProjectItem {...project} key={project.id} />)}</Items>
};

export default memo(ProjectList);
