import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ProfileLinks } from './ProfileLinks';

const profileLinks = [
  {
    title: 'foo',
    name: 'bar',
    url: 'https://foo.com',
    id: 123,
  },
];

function TestProfileLinks() {
  return <ProfileLinks profileLinks={profileLinks} />;
}

describe('ProfileLinks', () => {
  it('renders list with pointer emoji', () => {
    render(<TestProfileLinks />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      expect(item).toBeInTheDocument();
      const styles = window.getComputedStyle(item, '::marker');
      expect(styles.content).toContain('👉');
    });
  });

  it('renders an anchor for each listitem', () => {
    render(<TestProfileLinks />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      const link = within(item).getByRole('link', { name: 'foo' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://foo.com');
      expect(link).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });
});
