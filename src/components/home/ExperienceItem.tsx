import { type Experience } from '@/constants/experience.constant';
import BaseView from '../base-view/BaseView';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { FC } from 'react';
import { getFormattedDate, getFormattedDiff } from '@/lib/dateUtils';
import BaseText from '@/components/base-text/BaseText';
import { Dot } from 'lucide-react';
import { Base } from 'next/dist/client/components/react-dev-overlay/internal/styles/Base';

export interface ExperienceItemProps {
  index: number;
  experience: Experience;
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  const { experience } = props;

  const rowClasses = cn('flex w-full flex-row');
  const stepClasses = cn('flex-1 pl-2');
  const circleClasses = cn('self-center');

  return (
    <li className={rowClasses}>
      <BaseView className={circleClasses}>
        <Image
          className={'z-10 rounded-lg border'}
          src={experience.companyImage}
          width={48}
          height={48}
          alt={experience.company}
          title={experience.company}
          sizes={'48px'}
        />
      </BaseView>
      <BaseView className={stepClasses}>
        <Experience2 className={cn('')} experience={experience} />
      </BaseView>
    </li>
  );
};

const Experience2: FC<{
  experience: Experience;
  className?: string;
}> = (props) => {
  const { experience: item, className } = props;

  return (
    <button
      className={cn(
        'hover:bg-accent flex w-full cursor-default flex-col items-start gap-3 rounded-lg p-3 text-left text-sm transition-all',
        className,
      )}
    >
      <BaseView className='flex w-full flex-col gap-1'>
        <BaseView className='flex flex-row items-center'>
          <BaseView className='flex items-center gap-2'>
            <BaseText className='font-semibold' text={item.company} />
          </BaseView>
          <BaseView className={'text-muted-foreground ml-auto flex flex-row gap-1 text-xs'}>
            <BaseText text={getFormattedDate(item.startDate)} />
            <BaseText text={'-'} />
            <BaseText text={item.endDate ? getFormattedDate(item.endDate) : 'Present'} />
            <BaseView className={'flex-row'}>
              <Dot size={16} />
              <BaseText text={getFormattedDiff(item.startDate, item.endDate)} />
            </BaseView>
          </BaseView>
        </BaseView>
        <BaseView className='text-xs font-medium'>{item.title}</BaseView>
      </BaseView>
      {item.description && <BaseText className='line-clamp-2 text-xs' text={item.description} />}

      {item.responsibilities && (
        <BaseView className={'px-4'}>
          <ul className={'list-disc'}>
            {item.responsibilities.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </BaseView>
      )}

      {item.technologies && (
        <BaseView className='flex flex-row flex-wrap items-center gap-1'>
          {item.technologies.map((label, index) => (
            <li key={label} className={'font-semibold italic'}>
              <BaseText className={'text-sm'} text={label}/>
              {index + 1 < item.technologies!.length && <span className='text-muted-foreground'>|</span>}
            </li>
          ))}
        </BaseView>
      )}
    </button>
  );
};
