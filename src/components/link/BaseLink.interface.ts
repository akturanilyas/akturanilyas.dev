import { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export type BaseLinkProps = Omit<PropsWithChildren<LinkProps>, 'href'> & {
  title: string;
  link: string;
  className?: string;
};
