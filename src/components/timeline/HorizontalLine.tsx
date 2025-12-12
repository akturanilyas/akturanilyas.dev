import BaseView from "../base-view/BaseView.tsx";
import type {FC} from "react";
import {cn} from "../../lib/utils.ts";

export const HorizontalLine: FC<{
  className?: string;
}> = ({ className }) => (
  <BaseView
    className={cn(
      "absolute left-6 sm:left-7 w-px bg-black/[0.08] dark:bg-white/[0.08]",
      className
    )}
    style={{
      top: '56px',
      height: 'calc(100% - 56px + 24px)',
    }}
  />
);
