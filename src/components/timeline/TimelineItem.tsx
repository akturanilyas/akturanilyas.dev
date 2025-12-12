import BaseView from "../base-view/BaseView.tsx";
import type {TimelineItemProps} from "./TimelineItem.type.ts";
import type {FC} from "react";
import {getFormattedDate, getFormattedDiff} from "../../lib/dateUtils.ts";
import {GoDotFill} from "react-icons/go";
import BaseText from "../base-text/BaseText.tsx";
import {motion} from "motion/react";

export const TimelineItem: FC<TimelineItemProps> = (props) => {
  const { title, subtitle, endDate, startDate, children } = props;

  return (
    <BaseView className="w-full flex-col gap-6">
      {/* Header */}
      <BaseView className="flex flex-col gap-3">
        <BaseView className="flex flex-col gap-1.5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <BaseText 
              className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight" 
              text={title} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <BaseText 
              className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed" 
              text={subtitle} 
            />
          </motion.div>
        </BaseView>
        
        {/* Date Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 border border-blue-500/20 dark:border-blue-400/20 w-fit backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {getFormattedDate(startDate)}
          </span>
          <span className="text-slate-500 dark:text-slate-400">-</span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {endDate ? getFormattedDate(endDate) : 'Present'}
          </span>
          <BaseView className="flex-row items-center gap-1 ml-1 pl-2 border-l border-blue-500/20 dark:border-blue-400/20">
            <GoDotFill size={4} className="text-blue-500 dark:text-blue-400" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {getFormattedDiff(startDate, endDate)}
            </span>
          </BaseView>
        </motion.div>
      </BaseView>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </BaseView>
  );
};

export default TimelineItem;
