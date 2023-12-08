import BaseView from '@/components/base-view/BaseView';
import { cn } from '@/utils/commonUtils';
import { FC } from 'react';
import BaseText from '@/components/base-text/BaseText';

export interface TransparentCircleProps {
  className?: string;
}

const TransparentCircle: FC<TransparentCircleProps> = (props) => {
  const { className } = props;

  return (
    <BaseView
      className={cn('animate-blob absolute h-[20rem] w-[20rem] rounded-full opacity-70 blur-xl filter', className)}
    />
  );
};

export default function Home() {
  return (
    <BaseView className={'h-full justify-center'}>

      <BaseView className={'relative border-2 rounded-md bg-slate-200 items-center p-4 h-2/3'}>
        <TransparentCircle className={'left-32 bg-purple-300 mix-blend-multiply'} />
        <TransparentCircle className={'right-32 bg-yellow-300 mix-blend-multiply'} />
        <TransparentCircle className={'top-32 bg-pink-300 mix-blend-multiply'} />
        <BaseView className={'relative bg-red-900'}>
          <BaseText text={'amsdkjamsdkamsd'} />
          <BaseText text={'amsdkjamsdkamsd'} />
          <BaseText text={'amsdkjamsdkamsd'} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
}
