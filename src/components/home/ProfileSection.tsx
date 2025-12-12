import {ABOUT_LINKS} from "../../constants/link.constant.ts";
import BaseView from "../base-view/BaseView.tsx";
import {InformationItem} from "./InformationItem.tsx";
import Card from "../card/Card.tsx";
import {motion} from "motion/react";
import {useInView} from "motion/react";
import {useRef} from "react";

export const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <Card variant="glass" className="w-full p-10 sm:p-12 lg:p-16 overflow-hidden relative">
      <BaseView
        ref={ref}
        className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          <motion.img
            src="/assets/img/akturanilyas.jpeg"
            alt="İlyas AKTURAN"
            className="w-28 h-28 rounded-full border border-black/10 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] object-cover sm:w-36 sm:h-36 lg:w-40 lg:h-40"
            itemProp="image"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </motion.div>

        {/* Name and Title */}
        <BaseView className="flex-1 text-center lg:text-left">
          <motion.h1
            itemProp="name"
            className="text-3xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight leading-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            İlyas AKTURAN
          </motion.h1>
          <motion.h2
            itemProp="jobTitle"
            className="text-base text-slate-600 dark:text-slate-400 mb-8 font-medium sm:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            Software Engineer
          </motion.h2>

          {/* Social Links */}
          <motion.div
            className="flex flex-row justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            {ABOUT_LINKS.map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + key * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <InformationItem
                  title={`İlyas AKTURAN ${item.platform}`}
                  {...item}
                />
              </motion.div>
            ))}
          </motion.div>
        </BaseView>
      </BaseView>
    </Card>
  );
};
