import { motion, type HTMLMotionProps } from 'motion/react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface AnimatedViewProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedView = forwardRef<HTMLDivElement, AnimatedViewProps>(
  ({ className, children, ...props }, ref) => {
    const classes = twMerge('flex flex-col', className);

    return (
      <motion.div ref={ref} className={classes} {...props}>
        {children}
      </motion.div>
    );
  }
);

AnimatedView.displayName = 'AnimatedView';

