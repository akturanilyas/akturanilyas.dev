import  {createElement, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type {CustomIconProviderProps} from "./CustomIconProvider.interface.ts";
import BaseView from "../components/base-view/BaseView.tsx";

const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, customSize, className, name, iconClassName } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <BaseView className={classes} data-testid={`icon.${name || 'default'}`}>
      {createElement(icon, {
        width: customSize || 24,
        height: customSize || 24,
        color: 'slate.200',
        className: iconClassName,
      })}
    </BaseView>
  );
};

export default CustomIconProvider;
