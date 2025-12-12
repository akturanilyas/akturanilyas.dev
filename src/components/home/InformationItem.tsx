import type {FC} from 'react';
import type {InformationItemInterface} from "./InformationItem.interface.ts";
import {BaseLink} from "../link/BaseLink.tsx";
import {motion} from "motion/react";

export const InformationItem: FC<InformationItemInterface> = (props) => {
  const { link, title } = props;

  return (
    <BaseLink
      title={title}
      link={link}
      className="group"
    >
      <motion.div
        className="flex-row items-center justify-center p-2.5 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08]"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <props.icon className="text-slate-500 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" size={20} />
        </motion.div>
      </motion.div>
    </BaseLink>
  );
};
