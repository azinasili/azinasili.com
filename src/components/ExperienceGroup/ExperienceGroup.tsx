import type { PropsWithChildren } from 'react';

type ExperienceGroupProps = PropsWithChildren<unknown>;

export function ExperienceGroup({ children }: ExperienceGroupProps) {
  return <div>{children}</div>;
}
