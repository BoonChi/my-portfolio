import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LandingPage from '../LandingPage';

afterEach(cleanup);

describe('Landing page', () => {
  beforeEach(() => {});
  it('renders Landing page', async () => {
    render(<LandingPage handleShowProject={jest.fn()} photoSrc={'abc'} />);
    // Click button
    fireEvent.click(screen.getByText('Click here'));

    // Wait for page to update with query text
    const items = await screen.findAllByText('Web');
    expect(items).toHaveLength(1);
  });
});
