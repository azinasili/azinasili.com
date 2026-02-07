import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting', () => {
  it('renders greeting', () => {
    render(<Greeting />);
    expect(screen.getByRole('heading', { level: 1, name: /hi/i })).toBeInTheDocument();
  });
});
