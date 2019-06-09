import React from 'react';
import ReactDOM from 'react-dom';
import { Page1 } from '../pages/Page1';
const assert = require('assert');

describe('Page 1', () => {
  const node = document.createElement('div');

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it('should have a className', () => {
    ReactDOM.render(<Page1 />, node);

    const page = node.querySelector('div');

    assert.equal(page.getAttribute('id'), 'page1');
  });
});
