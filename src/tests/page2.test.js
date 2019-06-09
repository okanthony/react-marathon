import React from 'react';
import ReactDOM from 'react-dom';
import { Page2 } from '../pages/Page2';
const assert = require('assert');

describe('Page 2', () => {
  const node = document.createElement('div');

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it('should have a className', () => {
    ReactDOM.render(<Page2 />, node);

    const page = node.querySelector('div');

    assert.equal(page.getAttribute('id'), 'page2');
  });
});
