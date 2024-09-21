import { type Experience } from '@/constants/experience.constant';
import { cn } from '@/lib/utils';
import { Div, Text } from '@akturanilyas/ui';

export interface ExperienceItemProps {
  experience: Experience;
  className?: string;
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  const { experience, className } = props;

  return (
    <Div className={cn('flex-col gap-2', className)}>
      {experience.description && <Text className='line-clamp-2 text-xs' text={experience.description} />}

      {experience.responsibilities && (
        <Div className={'px-4'}>
          <ul className={'list-disc'}>
            {experience.responsibilities.map((label) => (
              <li className={'text-sm'} key={label}>
                {label}
              </li>
            ))}
          </ul>
        </Div>
      )}

      {experience.technologies && (
        <ul className='experiences-center flex flex-row flex-wrap gap-1'>
          {experience.technologies.map((label, index) => (
            <li key={label} className={'font-semibold italic'}>
              <Text className={'text-sm'} text={label} />
              {index + 1 < experience.technologies!.length && <span className='text-muted-foreground'> |</span>}
            </li>
          ))}
        </ul>
      )}
    </Div>
  );
};
