import type {TextProps} from "./BaseText.interface.ts";
import type {FC} from "react";
import {translate} from "../../lib/translateUtil.ts";


const BaseText: FC<TextProps> = (props) => {
  const { text, className, ...rest } = props;

  return (
    <span {...props} className={className} {...rest}>
      {translate({ value: text })}
    </span>
  );
};

export default BaseText;
