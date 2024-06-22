import { FC } from 'react';
import { cn } from '@/lib/utils';

export const Title: FC<{
  className?: string;
  title: string;
}> = ({ title, className }) => {
  const classes = cn('text-center text-3xl font-semibold', className);

  return <h1 className={classes}>{title}</h1>;
};
