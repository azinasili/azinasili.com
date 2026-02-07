import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectList } from './ProjectList';

const projectList = [
  {
    name: 'foo',
    description: 'bar',
    url: 'https://foo.com',
    id: 123,
  },
];

function TestProjectList() {
  return <ProjectList projects={projectList} />;
}

describe('ProjectList', () => {
  it('renders list with pointer emoji', () => {
    render(<TestProjectList />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      const styles = window.getComputedStyle(item, '::marker');
      expect(styles.content).toContain('👉');
    });
  });
});
