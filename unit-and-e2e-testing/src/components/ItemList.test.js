import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList', () => {
  const items = ['apple', 'banana', 'cherry', 'date'];

  it('renders the list correctly', () => {
    render(<ItemList items={items} />);
    const itemsList = screen.getAllByRole('listitem');
    expect(itemsList.length).toEqual(4);
  });

  it('filters the list when the user types in a search term', () => {
    render(<ItemList items={items} />);
    const input = screen.getByLabelText('Search:');
    fireEvent.change(input, { target: { value: 'apple' } });
    const itemsList = screen.getAllByRole('listitem');
    expect(itemsList.length).toEqual(1);
    expect(itemsList[0]).toHaveTextContent('apple');
  });
});
