import BaseView from '@/components/base-view/BaseView';
import { clsx } from 'clsx';

export const Header = () => {
  const classes = clsx('h-16 justify-center items-center bg-secondary');

  return <BaseView className={classes}></BaseView>;
};
