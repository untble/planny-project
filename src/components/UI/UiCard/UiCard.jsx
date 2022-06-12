import React from 'react';
import clsx from 'clsx';

const UiCard = ({ children, className, backgroundColor = 'bg-white' }) => {
  return (
    <div className={clsx('rounded-md drop-shadow-lg p-6 min-w-0', backgroundColor, className)}>
      {children}
    </div>
  );
};

export default UiCard;
