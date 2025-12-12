import type {FC} from 'react';
import {DiMysql} from 'react-icons/di';
import {GrMysql} from 'react-icons/gr';
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
import {SiExpress, SiFlutter, SiNextdotjs, SiTailwindcss, SiTypeorm,} from 'react-icons/si';
import {FaDatabase} from 'react-icons/fa';
import type {IconType} from 'react-icons';
import {Technology} from "../../enums/technology.enum.ts";
import type {TechnologyIconProps} from "./TechnologyIcon.interface.ts";
import BaseView from "../base-view/BaseView.tsx";

export const TechnologyIcon: FC<TechnologyIconProps> = (props) => {
  const { technology } = props;

  const technologyIconMap: Record<Technology, IconType> = {
    [Technology.ANGULAR]: TbBrandAngular,
    [Technology.CSS]: TbBrandCss3,
    [Technology.EXPRESS]: SiExpress,
    [Technology.FLUTTER]: SiFlutter,
    [Technology.HTML]: TbBrandHtml5,
    [Technology.JAVASCRIPT]: TbBrandJavascript,
    [Technology.MONGODB]: TbBrandMongodb,
    [Technology.MYSQL]: DiMysql,
    [Technology.NEXTJS]: SiNextdotjs,
    [Technology.NODE]: TbBrandNodejs,
    [Technology.POSTGRESQL]: GrMysql,
    [Technology.PROVIDER]: FaDatabase,
    [Technology.REACT]: TbBrandReact,
    [Technology.SASS]: TbBrandSass,
    [Technology.SVELTE]: TbBrandSvelte,
    [Technology.TAILWIND]: SiTailwindcss,
    [Technology.TYPESCRIPT]: TbBrandTypescript,
    [Technology.TYPEORM]: SiTypeorm,
    [Technology.VUE]: TbBrandVue,
  };

  const TechnologyIcon = technologyIconMap[technology];

  return (
    <BaseView className="flex items-center justify-center p-2 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 border border-blue-500/20 dark:border-blue-400/20 backdrop-blur-sm">
      <TechnologyIcon size={18} className="text-slate-700 dark:text-slate-300" />
    </BaseView>
  );
};
