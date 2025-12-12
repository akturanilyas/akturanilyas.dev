import type { FC } from 'react';
import type {BaseLinkProps} from "./BaseLink.interface.ts";

export const BaseLink: FC<BaseLinkProps> = (props) => {
  const { link, className, title, ...rest } = props;

  return (
    <a title={title} className={className} target={'_blank'} rel={'noopener noreferrer'} href={link} {...rest}>
      {props.children}
    </a>
  );
};
