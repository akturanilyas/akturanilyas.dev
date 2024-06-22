import BaseView from '@/components/base-view/BaseView';
import { PROJECTS } from '@/constants/projects.constant';
import { ProjectItem } from '@/components/project-item/ProjectItem';

export const ProjectSection = () => (
  <BaseView className={'w-full flex-row flex-wrap gap-4'}>
    <BaseView className={'flex flex-row flex-wrap gap-4'}>
      {PROJECTS.map((item, key) => (
        <ProjectItem key={key} project={item} className={'min-w-[49%]'} />
      ))}
    </BaseView>
  </BaseView>
);
