import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component.js';

import HomePage from './home-page-component.js';

const createProps = ({ count = 0 } = {}) => ({ count });

describe('HomePage component', async assert => {
  const createHomePage = (props = {}) => render(<HomePage {...props} />);

  {
    const props = createProps();
    const $ = createHomePage(props);

    assert({
      given: 'a count',
      should: 'render the count',
      actual: $('.count').text(),
      expected: props.count,
    });
  }

  {
    const props = createProps({ count: 5 });
    const $ = createHomePage(props);

    assert({
      given: 'a count',
      should: 'render the count',
      actual: $('.count').text(),
      expected: props.count,
    });
  }

  {
    const props = createProps();
    const $ = createHomePage(props);

    assert({
      given: 'just rendering',
      should: 'render increment button',
      actual: $('.increment-button').length,
      expected: 1,
    });
  }
});
