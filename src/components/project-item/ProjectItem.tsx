import React, { FC } from 'react';
import { ProjectItemProps } from '@/components/project-item/ProjectItem.interface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BaseText from '@/components/base-text/BaseText';
import { BaseLink } from '@/components/link/BaseLink';
import { cn } from '@/lib/utils';

export const ProjectItem: FC<ProjectItemProps> = (props) => {
  const { project } = props;

  const classes = cn('flex-1', props.className);

  return (
    <BaseLink title={project.name} className={classes} link={project.githubUrl}>
      <Card className={'h-full w-full hover:shadow-lg hover:bg-slate-100'}>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <BaseText className={'text-sm'} text={project.description} />
        </CardContent>
      </Card>
    </BaseLink>
  );
};
