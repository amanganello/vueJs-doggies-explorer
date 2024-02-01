import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/vue';
import DoggiesExplorer from '../doggiesExplorer/DoggiesExplorer.vue';

describe('DoggiesExplorer', () => {
  beforeEach(() => {
    // Reset Ethereum object and window.ethereum before each test
    window.ethereum = {
      isConnected: () => false,
      request: () => Promise.resolve(),
    };
  });

  test('renders correctly when not connected', () => {
    render(DoggiesExplorer);
    expect(screen.getByText('The Doggies Explorer')).toBeInTheDocument();
    expect(screen.getByTestId('connect-wallet-button')).toBeInTheDocument();
    expect(() => screen.getByText(/Search/i)).toThrow();
    expect(() => screen.getByText(/Search Random/i)).toThrow();
  });

  test('renders correctly when connected', async () => {
    window.ethereum.isConnected = () => true;
    render(DoggiesExplorer);
    expect(screen.getByText('The Doggies Explorer')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Search Random')).toBeInTheDocument();
  });
});
