import { describe, test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/vue';
import DoggiesGralInfo from '../doggiesExplorer/DoggiesGralInfo.vue';

describe('DoggiesGralInfo', () => {
    const tokenData = {
      name: 'Sample Doggie',
      ownerOf: 'John Doe',
      description: 'A cute doggie',
      image_url: 'sample-image.jpg',
    };
  
    test('renders correctly', () => {
      render(DoggiesGralInfo, {
        props: {
          tokenData,
        },
      });
      expect(screen.getByText('Title and Owner')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByAltText('Sample Doggie Image')).toBeInTheDocument();
    });
  
    test('renders token data correctly', () => {
      render(DoggiesGralInfo, {
        props: {
          tokenData,
        },
      });
      
      expect(within(screen.getByTestId('token_name_owner')).getByText('Sample Doggie')).toBeInTheDocument();
      expect(within(screen.getByTestId('token_name_owner')).getByText('John Doe')).toBeInTheDocument();
      expect(within(screen.getByTestId('token_description')).getByText('A cute doggie')).toBeInTheDocument();
    });
  });