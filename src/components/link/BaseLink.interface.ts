import type {HTMLProps} from "react";

export type BaseLinkProps = HTMLProps<HTMLAnchorElement> & {
  title: string;
  link: string;
  className?: string;
};
