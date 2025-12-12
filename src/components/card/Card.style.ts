import { cva } from 'class-variance-authority';

export const card = cva(
  `
  flex rounded-xl border border-blue-500/20 dark:border-blue-400/20
  shadow-sm p-4 relative overflow-hidden backdrop-blur-sm
  `,
  {
    variants: {
      variant: {
        glass: [
          'border-blue-500/20 dark:border-blue-400/20 rounded-xl backdrop-blur-sm shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-cyan-400/5 bg-white/80 dark:bg-[#1a1a1f]/80',
        ],
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
);

export const cardHeader = cva('flex py-2', {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export const cardBody = cva('flex py-2', {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});
