import { Button } from '@/components/ui/button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders', () => {
    render(<Button>Click me</Button>);
    screen.getByText('Click me');
  });
});
