import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Components/Layout/Footer/Footer';

describe('Footer Component', () => {
  test('renders the footer element', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('displays contact email addresses', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/office_cdc@iitr.ac.in/i)).toBeInTheDocument();
  });

  test('displays quick links section', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/quick links/i)).toBeInTheDocument();
  });

  test('displays IIT Roorkee link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const link = screen.getByText('IIT Roorkee');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://iitr.ac.in/');
  });

  test('displays location information', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/IIT Roorkee, Roorkee/i)).toBeInTheDocument();
  });

  test('renders embedded map', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const iframe = screen.getByTitle('CDC Office IIT Roorkee Location');
    expect(iframe).toBeInTheDocument();
  });
});
