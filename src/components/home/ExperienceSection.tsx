import { EXPERIENCES } from '@/constants/experience.constant';
import { Timeline, TimelineItem, TimelineItemType } from '@akturanilyas/ui';
import { ExperienceItem } from '@/components/home/ExperienceItem';

export const ExperienceSection = () => {
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

  return <Timeline variant={'glass'} items={experiences} />;
};
