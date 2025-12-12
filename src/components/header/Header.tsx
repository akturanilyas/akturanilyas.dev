import { clsx } from 'clsx';
import BaseView from "../base-view/BaseView.tsx";

export const Header = () => {
  const classes = clsx('h-16 justify-center items-center bg-secondary');

  return <BaseView className={classes}></BaseView>;
};
