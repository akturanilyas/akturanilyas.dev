import React, { FC } from 'react';
import { BaseLinkProps } from '@/components/link/BaseLink.interface';
import Link from 'next/link';

export const BaseLink: FC<BaseLinkProps> = (props) => {
  const { link, className, title, ...rest } = props;

  return (
    <Link title={title} className={className} target={'_blank'} rel={'noopener noreferrer'} href={link} {...rest}>
      {props.children}
    </Link>
  );
};
