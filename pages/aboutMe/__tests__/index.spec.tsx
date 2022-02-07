import { render, screen } from '@testing-library/react';
import AboutMe from '../index.page';

describe('About me', () => {
  it('renders About me page unchanged', () => {
    const { container } = render(<AboutMe />);
    expect(container).toMatchSnapshot();
  });

  it('renders and reads H1 text', () => {
    render(<AboutMe />);

    const heading = screen.getByRole('heading', {
      name: 'About Chi',
    });

    expect(heading).toBeInTheDocument();
  });
});
