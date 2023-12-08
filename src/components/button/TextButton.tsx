import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.interface';
import BaseButton from '@/components/button/BaseButton';

const Button: FC<ButtonProps> = (props) => {
  const classes = twMerge(`
    p-0 rounded-0 justify-start
    bg-transparent
    active:bg-transparent
    disabled:bg-transparent
    ${props.className || ''}
  `);

  const textClasses = twMerge(`
    font-normal
    text-left
    text-slate-600
    ${props?.textClassName || ''}
  `);

  return <BaseButton {...props} className={classes} textClassName={textClasses} />;
};

export default Button;
