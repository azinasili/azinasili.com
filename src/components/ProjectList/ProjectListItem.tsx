import type { FC } from 'react';
import { memo } from 'react';
import type { Project } from 'types/Project';
import { PointerList } from 'components/PointerList';

const ProjectListItem: FC<Project> = ({ name, url }) => {
  return (
    <PointerList.Item><a href={url} rel="noreferrer noopener">{name}</a></PointerList.Item>
  );
};

export default memo(ProjectListItem);
