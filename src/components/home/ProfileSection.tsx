import Image from 'next/image';
import { ABOUT_LINKS } from '@/constants/link.constant';
import { InformationItem } from '@/components/home/InformationItem';
import React from 'react';
import { Card, Div } from '@akturanilyas/ui';

export const ProfileSection = () => (
    <Card
      variant={'glass'}
      className={
        'flex flex-col items-center md:flex-row p-4 gap-4'
      }
    >
      <Div className={'flex w-full flex-col items-center md:w-1/3 md:flex-row md:justify-between md:p-6'}>
        <Image
          className={'rounded-full'}
          loading={'lazy'}
          src={'/assets/img/akturanilyas.png'}
          width={100}
          height={100}
          alt={'Ilyas Akturan'}
        />
      </Div>

      <Div itemScope itemType='http://schema.org/Person' className={'md:w-1/3'}>
        <h1 itemProp='name' className={'text-center text-xl font-bold'}>
          İlyas AKTURAN
        </h1>
        <h2 itemProp='jobTitle' className={'text-center text-base'}>
          Software Engineer
        </h2>
      </Div>

      <Div className={'flex-row justify-items-end gap-2 md:w-1/3 md:flex-col '}>
        {ABOUT_LINKS.map((item, key) => (
          <InformationItem title={`İlyas AKTURAN ${item.platform}`} key={key} {...item} />
        ))}
      </Div>
    </Card>
);
