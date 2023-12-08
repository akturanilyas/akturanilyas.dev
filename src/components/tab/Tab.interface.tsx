export type TabItem = {
  label: string;
  onClick?: (label: string) => void;
};

export interface TabProps {
  className?: string;
  textClassName?: string;
  items: Array<TabItem>;
  onClick?: (label: string) => void;
  currentTab?: string;
}
