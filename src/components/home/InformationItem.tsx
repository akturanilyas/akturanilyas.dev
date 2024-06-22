import { FC } from 'react';
import { InformationItemInterface } from '@/components/home/InformationItem.interface';
import BaseView from '@/components/base-view/BaseView';
import { BaseLink } from '@/components/link/BaseLink';

export const InformationItem: FC<InformationItemInterface> = (props) => {
  const { text, link, title } = props;

  const IconWithText = (
    <BaseView className={'flex-row items-center justify-center gap-0.5 md:justify-end'}>
      <props.icon className={'text-secondary'} size={24} />
    </BaseView>
  );

  return (
    <BaseLink title={title} link={link}>
      {IconWithText}
    </BaseLink>
  );
};
