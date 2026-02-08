import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ProjectList } from './ProjectList';

const projectList = [
  {
    name: 'foo',
    description: 'bar',
    url: 'https://foo.com',
    highlights: ['one', 'two'],
    id: 123,
  },
];

function TestProjectList() {
  return <ProjectList projects={projectList} />;
}

describe('ProjectList', () => {
  it('renders an anchor for each listitem', () => {
    render(<TestProjectList />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      const link = within(item).getByRole('link', { name: 'foo' });
      expect(link).toHaveAttribute('href', 'https://foo.com');
      expect(link).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });
});
