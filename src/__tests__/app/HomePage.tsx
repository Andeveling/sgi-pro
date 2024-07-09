import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('should render home page', () => {
    render(<HomePage />);
    expect(screen.getByText('home page')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<HomePage />);
    expect(screen).toMatchSnapshot();
  });
});
