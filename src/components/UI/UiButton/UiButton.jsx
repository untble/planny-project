import React from 'react';
import clsx from 'clsx';

const UiButton = ({ children, className, variant, text, disabled }) => {
  return (
    <button
      className={clsx('flex items-center px-5 py-2 rounded gap-2',
        variant === 'done' && 'bg-green-500 hover:bg-green-400',
        variant === 'edit' && 'bg-purple-500 hover:bg-purple-400',
        variant === 'delete' && 'bg-red-400 hover:bg-red-300',
        disabled && 'bg-gray-300 hover:bg-gray-300',
        className)}
    >
      {children}
      <span className="font-medium text-base">{text}</span>
    </button>
  );
};

export default UiButton;
