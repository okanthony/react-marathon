import './styles.css';
import React from 'react';
import classNames from '@sindresorhus/class-names';

const Button = props => {
  const classes = classNames('button', {
    'button-block': true,
    'button-small': false
  });
  const buttonProps = {
    ...props,
    className: classes
  };

  return <button type="button" {...buttonProps} />;
};

export { Button };
