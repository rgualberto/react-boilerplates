import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App';

test('shows description when description button is clicked', () => {
  const {queryByText, getByText} = render(<App/>)

  expect(queryByText(/sick app/i)).toBeNull();

  fireEvent.click(getByText(/see description/i));

  expect(getByText(/sick app/i)).toBeInTheDocument();
})
