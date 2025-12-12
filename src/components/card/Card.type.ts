import type { VariantProps } from 'class-variance-authority';
import { card } from './Card.style';
import type { PropsWithChildren } from 'react';
import type {BaseViewProps} from "../base-view/BaseView.interface.ts";

export type CardProps = VariantProps<typeof card> &
  Omit<BaseViewProps, 'title'> &
  PropsWithChildren<{
    title?: {
      className?: string;
      text: string;
    };
    description?: {
      className?: string;
      text: string;
    };
    className?: string;
  }>;
