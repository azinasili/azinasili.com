import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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
      const styles = window.getComputedStyle(item, '::marker');
      expect(styles.content).toContain('👉');
    });
  });
});
