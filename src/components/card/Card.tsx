import {card, cardBody, cardHeader} from './Card.style';
import type {CardProps} from "./Card.type.ts";
import type {FC} from "react";
import BaseView from "../base-view/BaseView.tsx";
import {cn} from "../../lib/utils.ts";

const Card: FC<CardProps> = (props) => {
  const { className, title, description, variant, ...rest } = props;

  return (
    <BaseView className={cn(card({ variant, className }))} {...rest}>
      {title && <BaseView className={cn(cardHeader({ className: title.className }))}>{title.text}</BaseView>}
      {description && <BaseView className={cn(cardBody({ className: description.className }))}>{description.text}</BaseView>}
      {props.children}
    </BaseView>
  );
};

export default Card;
