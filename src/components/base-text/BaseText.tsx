import { FC } from 'react';
import { TextProps } from './BaseText.interface';
import { translate } from '@/lib/translateUtil';

const BaseText: FC<TextProps> = (props) => {
  const { text, className, ...rest } = props;

  return (
    <span {...props} className={className} {...rest}>
      {translate({ value: text })}
    </span>
  );
};

export default BaseText;
