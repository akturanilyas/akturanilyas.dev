import { cn } from '@/utils/commonUtils';
import BaseView from '@/components/base-view/BaseView';
import Tab from '@/components/tab/Tab';
import { TabItem } from '@/components/tab/Tab.interface';

export const Header = () => {
  const classes = cn(`
  h-16 justify-center items-center
  border-b border-slate-200
  `);

  const tabItems: Array<TabItem> = [{ label: 'Intro' }, { label: 'Intro2' }, { label: 'Footer' }];

  return (
    <BaseView className={classes}>
      <Tab items={tabItems} />
    </BaseView>
  );
};
