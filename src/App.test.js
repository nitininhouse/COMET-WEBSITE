import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderWithRouter = (initialEntries = ['/comet']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

describe('App', () => {
  test('renders without crashing', () => {
    renderWithRouter();
  });

  test('renders the main app container', () => {
    const { container } = renderWithRouter();
    const appDiv = container.querySelector('.App');
    expect(appDiv).toBeInTheDocument();
  });

  test('renders navigation on home page', () => {
    renderWithRouter(['/comet']);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('renders footer on home page', () => {
    renderWithRouter(['/comet']);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('renders event navigation on events page', () => {
    renderWithRouter(['/comet/events']);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
