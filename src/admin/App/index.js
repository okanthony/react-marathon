import './styles.css';
import React, { useContext } from 'react';

import { AppContext } from '../Context';
import { TitleBar } from '../TitleBar';
import { Instructions } from '../Instructions';
import { Page } from '../Page';

const App = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className="app-container">
      <TitleBar />
      <div className="app-body">
        <Instructions />
        <div className="app-content">
          <Page currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export { App };
