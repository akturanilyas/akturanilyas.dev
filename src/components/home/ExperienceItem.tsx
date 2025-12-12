import type {Experience} from "../../constants/experience.constant.ts";
import BaseView from "../base-view/BaseView.tsx";
import BaseText from "../base-text/BaseText.tsx";
import {cn} from "../../lib/utils.ts";
import {motion} from "motion/react";

export interface ExperienceItemProps {
  experience: Experience;
  className?: string;
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  const { experience, className } = props;

  return (
    <BaseView className={cn('flex-col gap-6', className)}>
      {experience.description && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <BaseText
            className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal"
            text={experience.description}
          />
        </motion.div>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <motion.div
          className="flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-2.5">
            {experience.responsibilities.map((label, index) => (
              <motion.li
                key={label}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>{label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {experience.technologies && experience.technologies.length > 0 && (
        <motion.div
          className="flex-col gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
            Technologies
          </h4>
          <BaseView className="flex flex-row flex-wrap gap-2">
            {experience.technologies.map((label, index) => (
              <motion.span
                key={label}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 border border-blue-500/20 dark:border-blue-400/20 text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-sm tracking-normal"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.03,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {label}
              </motion.span>
            ))}
          </BaseView>
        </motion.div>
      )}
    </BaseView>
  );
};
