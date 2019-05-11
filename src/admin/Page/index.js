import React from 'react';
import PropTypes from 'prop-types';

import { Page1 } from '../../pages/Page1';
import { Page2 } from '../../pages/Page2';
import { Page3 } from '../../pages/Page3';
import { Page4 } from '../../pages/Page4';

const Page = ({ currentPage }) => {
  const pages = [Page1, Page2, Page3, Page4];
  const CurrentPage = pages[currentPage - 1] || Page1;

  return <CurrentPage />;
};

Page.propTypes = {
  currentPage: PropTypes.number.isRequired
};

export { Page };
