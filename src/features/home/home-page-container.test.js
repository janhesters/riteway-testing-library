import { fireEvent, render } from '@testing-library/react';
import { describe } from 'riteway';

import HomePage from './home-page-container.js';

describe('HomePage container', async assert => {
  const { getByText, getByTestId } = render(<HomePage />);

  fireEvent.click(getByText(/increment/i));

  assert({
    given: "a click on the 'Increment' button",
    should: 'increment the count',
    actual: getByTestId('count').textContent,
    expected: '1',
  });
});
