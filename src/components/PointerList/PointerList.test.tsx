import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PointerList } from './PointerList';

function TestPointerList() {
  return (
    <PointerList>
      <PointerList.Item>one</PointerList.Item>
      <PointerList.Item>two</PointerList.Item>
      <PointerList.Item>three</PointerList.Item>
    </PointerList>
  );
}

describe('PointerList', () => {
  it('renders list with pointer emoji', () => {
    render(<TestPointerList />);
    const items = screen.getAllByRole('listitem');
    items.forEach(item => {
      const styles = window.getComputedStyle(item, '::marker');
      expect(styles.content).toContain('👉');
    });
  });
});
