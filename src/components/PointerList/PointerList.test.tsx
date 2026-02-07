import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PointerList } from './PointerList';

const pointerItems = ['one', 'two', 'three'];

function TestPointerList() {
  return (
    <PointerList>
      {pointerItems.map(item => (
        <PointerList.Item key={item}>{item}</PointerList.Item>
      ))}
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

  it('renders children content', () => {
    render(<TestPointerList />);
    const items = screen.getAllByRole('listitem');
    items.forEach((item, index) => {
      expect(item.textContent).toStrictEqual(pointerItems[index]);
    });
  });
});
