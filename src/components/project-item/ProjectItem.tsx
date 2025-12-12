import type {FC} from 'react';
import {BaseLink} from "../link/BaseLink.tsx";
import type {ProjectItemProps} from "./ProjectItem.interface.ts";
import {cn} from "../../lib/utils.ts";
import Card from "../card/Card.tsx";
import BaseView from "../base-view/BaseView.tsx";
import BaseText from "../base-text/BaseText.tsx";
import {TechnologyIcon} from "../technology-icon/TechnologyIcon.tsx";
import {FaGithub} from "react-icons/fa";
import {motion, useInView} from "motion/react";
import {useRef} from "react";

interface ExtendedProjectItemProps extends ProjectItemProps {
  index?: number;
}

export const ProjectItem: FC<ExtendedProjectItemProps> = (props) => {
  const { project, index = 0 } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const classes = cn('group', props.className);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      <BaseLink title={project.name} className={classes} link={project.githubUrl}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card variant="glass" className="h-full p-6 flex flex-col gap-5 relative group">
            {/* Header with title and GitHub icon */}
            <BaseView className="relative z-10 flex flex-row items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-white/90 transition-colors leading-tight tracking-tight">
                {project.name}
              </h3>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FaGithub className="text-slate-500 dark:text-slate-500 group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5" size={18} />
              </motion.div>
            </BaseView>

            {/* Description */}
            <BaseText
              className="relative z-10 text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3"
              text={project.description}
            />

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <BaseView className="relative z-10 flex flex-row flex-wrap gap-2 mt-auto pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                {project.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      delay: (index * 0.1) + 0.3 + (techIndex * 0.05),
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <TechnologyIcon technology={tech} />
                  </motion.div>
                ))}
              </BaseView>
            )}
          </Card>
        </motion.div>
      </BaseLink>
    </motion.div>
  );
};
