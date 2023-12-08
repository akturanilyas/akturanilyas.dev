'use client';

import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabProps } from '@/components/tab/Tab.interface';
import BaseView from '@/components/base-view/BaseView';
import TextButton from '@/components/button/TextButton';
import { cn } from '@/utils/commonUtils';

const Tab: FC<TabProps> = (props) => {
  const { className, items, textClassName, onClick } = props;
  const [currentTab, setCurrentTab] = useState<string | undefined>(props.currentTab);
  const classes = twMerge(`
    flex flex-row flex-1 justify-evenly rounded-full bg-white-200
    ${className}
  `);

  const textClasses = twMerge(`
    text-slate-400 font-semibold
    hover:scale-110
    ${textClassName}
  `);

  return (
    <BaseView className={classes}>
      {items.map((tab) => (
        <TextButton
          key={tab.label}
          label={tab.label}
          className={cn('my-2 px-4 py-0.5', { 'rounded-full bg-slate-200': currentTab === tab.label })}
          textClassName={cn(textClasses, { 'text-slate-500': currentTab === tab.label })}
          onClick={() => {
            setCurrentTab(tab.label);
            (tab?.onClick && tab?.onClick(tab.label)) || (onClick && onClick(tab.label));
          }}
        />
      ))}
    </BaseView>
  );
};

export default Tab;
