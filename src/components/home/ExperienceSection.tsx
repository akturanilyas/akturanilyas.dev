import TimelineItem from "../timeline/TimelineItem.tsx";
import Timeline from "../timeline/Timeline.tsx";
import type {TimelineItemType} from "../timeline/Timeline.type.ts";
import {EXPERIENCES} from "../../constants/experience.constant.ts";
import {ExperienceItem} from "./ExperienceItem.tsx";
import BaseView from "../base-view/BaseView.tsx";
import BaseText from "../base-text/BaseText.tsx";
import {motion, useInView} from "motion/react";
import {useRef} from "react";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const experiences: Array<TimelineItemType> = EXPERIENCES.map((experience) => ({
    img: {
      src: experience.companyImage,
      alt: experience.company,
      title: experience.company,
      className: experience.imageBorder,
    },
    color: experience.imageColor,
    children: (
      <TimelineItem
        title={experience.company}
        startDate={experience.startDate}
        subtitle={experience.title}
        endDate={experience.endDate}
      >
        <ExperienceItem experience={experience} className={'py-2'} />
      </TimelineItem>
    ),
  }));

  return (
    <BaseView className="w-full flex-col gap-8">
      <motion.div
        ref={ref}
        className="mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
      >
        <BaseText text="Experience" className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight sm:text-3xl" />
        <motion.div
          className="mt-2 h-px bg-black/20 dark:bg-white/20"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
        />
      </motion.div>
      <Timeline variant={'glass'} items={experiences} />
    </BaseView>
  );
};
