import './styles.css';
import React, { useContext } from 'react';
import classNames from '@sindresorhus/class-names';
import { AppContext } from '../Context';

const numbers = [1, 2, 3, 4, 5];

const TitleBar = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className="title-bar">
      {currentPage}
      <div className="progress-meter">
        <div className="progress-meter-bar">
          {numbers.map(number => {
            const classes = classNames('progress-bullet', {
              'progress-bullet-completed': number <= currentPage
            });
            return <div className={classes} key={number} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { TitleBar };
