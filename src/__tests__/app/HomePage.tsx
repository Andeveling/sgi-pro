import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('should render home page', () => {
    render(<HomePage />);
    expect(screen).toBeInTheDocument();
  });
});
