import type { Project } from 'types/Project';
import { PointerList } from 'components/PointerList';

export function ProjectListItem({ name, url }: Project) {
  return (
    <PointerList.Item>
      <a href={url} rel="noreferrer noopener">
        {name}
      </a>
    </PointerList.Item>
  );
}
