import TimelineItem from './TimelineItem';
import type {TimelineItemProps} from "./TimelineItem.type.ts";
import type {FC} from "react";
import type {TimelineProps} from "./Timeline.type.ts";
import {cn} from "../../lib/utils.ts";
import BaseView from "../base-view/BaseView.tsx";
import {motion, useInView} from "motion/react";
import {useRef} from "react";
import Card from "../card/Card.tsx";

export const Timeline: FC<TimelineProps> & {
  TimelineItem: FC<TimelineItemProps>;
} = (props) => {
  const { items,  className } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <BaseView className={cn('flex flex-col gap-8', className)} ref={ref}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.21, 1.11, 0.81, 0.99],
          }}
        >
          <Card variant="glass" className="p-6 sm:p-7 relative">
            <BaseView className="flex flex-col sm:flex-row gap-6 relative">
              {/* Timeline Line */}
              {index + 1 < items.length && (
                <div
                  className={cn(
                    "absolute left-8 sm:left-8 top-20 sm:top-24 bottom-[-24px] w-0.5",
                    "bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent dark:from-blue-400/30 dark:via-purple-400/30"
                  )}
                />
              )}

              {/* Company Logo */}
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  delay: index * 0.1 + 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <img
                    className={cn(
                      'rounded-xl border border-blue-500/15 dark:border-blue-400/15 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] object-cover bg-white dark:bg-white p-2.5 transition-all duration-200 hover:border-blue-500/25 dark:hover:border-blue-400/25 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
                      item.img.className,
                      'w-16 h-16 sm:w-20 sm:h-20'
                    )}
                    src={item.img.src}
                    width={80}
                    height={80}
                    alt={item.img.alt}
                    title={item.img.title}
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <BaseView className="flex-1 min-w-0">
                {item.children}
              </BaseView>
            </BaseView>
          </Card>
        </motion.div>
      ))}
    </BaseView>
  );
};

Timeline.TimelineItem = TimelineItem;

export default Timeline;
