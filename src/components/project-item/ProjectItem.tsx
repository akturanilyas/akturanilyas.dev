import React, { FC } from 'react';
import { ProjectItemProps } from '@/components/project-item/ProjectItem.interface';
import { cn } from '@/lib/utils';
import { Card } from '@akturanilyas/ui';
import { BaseLink } from '@/components/link/BaseLink';

export const ProjectItem: FC<ProjectItemProps> = (props) => {
  const { project } = props;

  const classes = cn('flex-1', props.className);

  return (
    <BaseLink title={project.name} className={classes} link={project.githubUrl}>
      <Card
        variant={'glass'}
        title={{ text: project.name, className: 'text-black font-bold' }}
        description={{ text: project.description, className: 'text-sm' }}
        className={'h-full hover:shadow-lg hover:bg-opacity-60'}
      />
    </BaseLink>
  );
};
