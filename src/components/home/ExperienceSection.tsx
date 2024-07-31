import BaseView from '@/components/base-view/BaseView';
import { EXPERIENCES } from '@/constants/experience.constant';
import { ExperienceItem } from '@/components/home/ExperienceItem';
import { cn } from '@/lib/utils';

export const ExperienceSection = () => (
  <BaseView
    className={
      'bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50 w-full gap-4 self-center rounded-lg border-none bg-opacity-50 p-4 backdrop-blur-md backdrop-filter md:w-8/12'
    }
  >
    <BaseView className={'relative h-full flex-row'}>
      <ul className={'flex flex-col gap-4'}>
        {EXPERIENCES.map((item, key) => (
          <BaseView className={'relative'} key={key}>
            <Divider className={cn(item.imageColor, { 'h-full': key + 1 === EXPERIENCES.length })} />
            <ExperienceItem index={key} experience={item} />
          </BaseView>
        ))}
      </ul>
    </BaseView>
  </BaseView>
);

export const Divider = ({ className }: { className: string }) => (
  <BaseView className={`absolute left-[22px] h-[calc(100%+16px)] w-1 ${className}`} />
);
