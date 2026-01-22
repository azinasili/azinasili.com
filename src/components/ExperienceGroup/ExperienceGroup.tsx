import type { PropsWithChildren } from 'react';

type ExperienceGroupProps = PropsWithChildren;

export function ExperienceGroup({ children }: ExperienceGroupProps) {
  return <div>{children}</div>;
}
