import { render, screen } from '@testing-library/react';
import AboutMe from '../index.page';

describe('About me', () => {
  it('renders About me page unchanged', () => {
    const { container } = render(<AboutMe />);
    expect(container).toMatchSnapshot();
  });

  it('renders and reads p text', () => {
    render(<AboutMe />);

    const heading = screen.getByText(/Poland/i);

    expect(heading).toBeInTheDocument();
  });
});
