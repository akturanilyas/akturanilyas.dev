import { TechnologyIconProps } from '@/components/technology-icon/TechnologyIcon.interface';
import { FC } from 'react';
import { Technology } from '@/enums/technology.enum';
import { DiMysql } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import {
  TbBrandAngular,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandSass,
  TbBrandSvelte,
  TbBrandTypescript,
  TbBrandVue,
} from 'react-icons/tb';
import { IconType } from 'react-icons';

export const TechnologyIcon: FC<TechnologyIconProps> = (props) => {
  const { technology } = props;

  const technologyIconMap: Record<Technology, IconType> = {
    [Technology.ANGULAR]: TbBrandAngular,
    [Technology.CSS]: TbBrandCss3,
    [Technology.HTML]: TbBrandHtml5,
    [Technology.JAVASCRIPT]: TbBrandJavascript,
    [Technology.MONGODB]: TbBrandMongodb,
    [Technology.MYSQL]: DiMysql,
    [Technology.NODE]: TbBrandNodejs,
    [Technology.POSTGRESQL]: GrMysql,
    [Technology.REACT]: TbBrandReact,
    [Technology.SASS]: TbBrandSass,
    [Technology.SVELTE]: TbBrandSvelte,
    [Technology.TYPESCRIPT]: TbBrandTypescript,
    [Technology.VUE]: TbBrandVue,
  };

  const TechnologyIcon = technologyIconMap[technology];

  return <TechnologyIcon size={24} className={'text-secondary'} />;
};
