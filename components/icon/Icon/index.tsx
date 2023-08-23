import React, { MouseEvent, ReactNode } from 'react';

type ButtonProps = {
  icon: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

export const Icon = ({ icon, onClick }: ButtonProps): JSX.Element => {
  const onIconClick = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof onClick === 'function') {
      return onClick(e);
    }
  };

  return (
    <div
      className='w-6 h-6 flex items-center justify-center rounded-full'
      onClick={onIconClick}
    >
      {icon}
    </div>
  );
};
