import './styles.css';
import React, { useContext } from 'react';
import { Tests } from '../Tests';

import { AppContext } from '../Context';
import { Button } from '../Button';

const Instructions = () => {
  const { currentPage, onNextButtonClick } = useContext(AppContext);

  return (
    <div className="instructions-bar">
      Instructions Bar
      <Tests currentPage={currentPage} />
      <Button onClick={onNextButtonClick}>Next Page</Button>
    </div>
  );
};

export { Instructions };
