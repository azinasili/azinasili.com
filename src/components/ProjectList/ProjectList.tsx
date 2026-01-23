import type { Project } from 'types/Project';
import { PointerList } from 'components/PointerList';
import { ProjectListItem } from './ProjectListItem';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <PointerList>
      {projects.map(project => (
        <ProjectListItem {...project} key={project.id} />
      ))}
    </PointerList>
  );
}
