import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { ABOUT_LINKS } from '@/constants/link.constant';
import { InformationItem } from '@/components/home/InformationItem';
import React from 'react';
import BaseView from '../base-view/BaseView';

export const ProfileSection = () => (
  <BaseView>
    <Card
      className={
        'flex flex-col items-center justify-between justify-items-center border-none bg-opacity-50 align-middle backdrop-blur-md backdrop-filter md:flex-row'
      }
    >
      <CardContent className={'flex w-full flex-col items-center gap-4 p-4 md:flex-row md:justify-between md:p-6'}>
        <BaseView className={'md:w-1/3'}>
          <Image
            className={'rounded-full'}
            loading={'lazy'}
            src={'/assets/img/akturanilyas.png'}
            width={100}
            height={100}
            alt={'Ilyas Akturan'}
          />
        </BaseView>

        <BaseView itemScope itemType='http://schema.org/Person' className={'md:w-1/3'}>
          <h1 itemProp='name' className={'text-center text-xl font-bold'}>
            İlyas AKTURAN
          </h1>
          <h2 itemProp='jobTitle' className={'text-center text-base'}>
            Software Engineer
          </h2>
        </BaseView>

        <BaseView className={'flex-row justify-items-end gap-2 md:w-1/3 md:flex-col '}>
          {ABOUT_LINKS.map((item, key) => (
            <InformationItem title={`İlyas AKTURAN ${item.platform}`} key={key} {...item} />
          ))}
        </BaseView>
      </CardContent>
    </Card>
  </BaseView>
);
