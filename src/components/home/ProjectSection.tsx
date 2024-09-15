import { PROJECTS } from '@/constants/projects.constant';
import { ProjectItem } from '@/components/project-item/ProjectItem';
import { Div } from '@akturanilyas/ui';

export const ProjectSection = () => (
  <Div className={'w-full flex-row flex-wrap gap-4'}>
    <Div className={'flex flex-row flex-wrap gap-4 w-full'}>
      {PROJECTS.map((item, key) => (
        <ProjectItem key={key} project={item} className={'min-w-[49%]'} />
      ))}
    </Div>
  </Div>
);
