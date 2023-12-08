import { cn } from '@/utils/commonUtils';
import BaseView from '@/components/base-view/BaseView';
import Tab from '@/components/tab/Tab';
import { TabItem } from '@/components/tab/Tab.interface';

export const Header = () => {
  const classes = cn(`
  bg-slate-200 
  h-16 w-full
  justify-center items-center 
  border-b
  border-slate-200
  `);

  const tabItems: Array<TabItem> = [{ label: 'a' }, { label: 'ab' }];

  return (
    <BaseView className={classes}>
      <Tab items={tabItems} />
    </BaseView>
  );
};
