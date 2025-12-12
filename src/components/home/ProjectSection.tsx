import BaseView from "../base-view/BaseView.tsx";
import {PROJECTS} from "../../constants/projects.constant.ts";
import {ProjectItem} from "../project-item/ProjectItem.tsx";
import BaseText from "../base-text/BaseText.tsx";
import {motion, useInView} from "motion/react";
import {useRef} from "react";

export const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <BaseView className="w-full flex-col gap-8">
      <motion.div
        ref={ref}
        className="mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
      >
        <BaseText text="Projects" className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight sm:text-3xl" />
        <motion.div
          className="mt-2 h-px bg-black/20 dark:bg-white/20"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
        />
      </motion.div>
      <BaseView className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {PROJECTS.map((item, key) => (
          <ProjectItem key={key} project={item} index={key} />
        ))}
      </BaseView>
    </BaseView>
  );
};
