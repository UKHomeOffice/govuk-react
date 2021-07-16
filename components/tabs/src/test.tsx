import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { SimpleTabs } from './fixtures';

afterEach(cleanup);

describe('Tabs', () => {
  it('clicking link works without crashing', () => {
    const { container } = render(<SimpleTabs />);
    const firstLink = container.querySelector('a');
    fireEvent.click(firstLink);
    expect(container).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    const { asFragment } = render(<SimpleTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
