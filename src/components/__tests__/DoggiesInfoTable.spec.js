import { describe, test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/vue';
import DoggiesInfoTable from '../doggiesExplorer/DoggiesInfoTable.vue';

describe('DoggiesInfoTable', () => {
  const tokenData = {
    attributes: [
      { trait_type: 'Trait 1', value: 'Value 1' },
      { trait_type: 'Trait 2', value: 'Value 2' },
    ],
  };

  test('renders correctly', () => {
    render(DoggiesInfoTable, {
      props: {
        tokenData,
      },
    });

    const tableElement = screen.getByRole('table');
    const rows = within(tableElement).getAllByRole('row');

    expect(rows.length).toBe(tokenData.attributes.length + 1);

    const headerRow = rows[0];
    expect(within(headerRow).getAllByRole('columnheader')).toHaveLength(2); // Two columns

    tokenData.attributes.forEach((attribute, index) => {
      const dataRow = rows[index + 1];
      expect(within(dataRow).getByText(attribute.trait_type)).toBeInTheDocument();
      expect(within(dataRow).getByText(attribute.value)).toBeInTheDocument();
    });
  });
});